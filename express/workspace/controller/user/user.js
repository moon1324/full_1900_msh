import User from "../../models/userSchema.js";
import passport from "passport";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        // 사용자가 잘못된 인증을 요청한 401코드
        return res.status(401).json({
            loginSuccess: false,
            message: "존재하지 않는 이메일입니다.",
        });
    } else {
        // 비밀번호가 맞는지 확인
        const passwordMatch = req.body.password === user.password;
        if (!passwordMatch) {
            return res.status(401).json({
                loginSuccess: false,
                message: "비밀번호를 확인해주세요.",
            });
        }

        const { ...userDatas } = user;
        const { password, ...others } = userDatas._doc;
        console.log(others);

        return res.status(200).json({
            user: others, // 최초 로그인시 유저정보
            loginSuccess: true, // 상태
            message: "로그인 성공!", // 메세지
        });
    }
};
const registerUser = async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        // 중복 회원가입 요청 발생 시 409 코드
        return res.status(409).json({
            registerSuccess: false,
            message: "이미 존재하는 이메일입니다",
        });
    } else {
        // 유저를 파싱
        let register = {
            email: req.body.email,
            password: req.body.password,
        };
        // 유저를 등록
        await User.create(register);
        return res.status(200).json({
            registerSuccess: true,
            message: "회원가입이 완료 되었습니다",
        });
    }
};

const updateUser = async (req, res) => {};
const deleteUser = async (req, res) => {};

// passport Login
const passportLogin = async (req, res, next) => {
    try {
        passport.authenticate("local", (error, user, info) => {
            if (error || !user) {
                res.status(400).json({ message: info.reason });
                return;
            }
            req.login(user, { session: false }, async (loginError) => {
                if (loginError) {
                    res.status(401).send(loginError);
                    return;
                }
                // 여기에서 검증된 회원을 처리
                // 검증된 회원에게 jwt토큰 생성 후 전달
                const token = jwt.sign(
                    {
                        email: user.email,
                        issuer: "michael",
                    },
                    SECRET_KEY,
                    {
                        expiresIn: "24h", // 유효시간 24시간
                    }
                );

                // 검증 (선택) 안해도 무관
                const loginUser = await User.findOne({ email: user.email }).lean();
                console.log(loginUser);

                // 민감한 정보를 제거 후
                // 유저와 토큰을 발급해서 화면으로 보낸다
                const { password, ...others } = loginUser;
                res.status(200).json({
                    user: others,
                    token: token,
                });
            });
            // console.log("authenticate", error, user, info);
        })(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// 토큰을 이용해서 인증받은 라우팅
const authLocation = async (req, res) => {
    try {
        // 인가가 완료된 유저는 req.user에 담긴다
        console.log("authLocation", req.user);
        const { password, ...others } = req.user;
        res.status(200).json({
            message: "자동 로그인 성공",
            ...others._doc,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

export { loginUser, registerUser, updateUser, deleteUser, passportLogin, authLocation };
