import React, { useContext } from "react";
// import { useParams, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { RouteContext } from "../../context/RouteContext";
import { useSelector } from "react-redux";

const Job = () => {
    // 쿼리스트링
    // const [searchParams] = useSearchParams();
    // const title = searchParams.get("title");

    const { table } = useContext(RouteContext);
    const { title } = useParams();

    // const { name, skills } = useSelector((state) => state.jobs)[title];
    // // redux에 있는 jobs
    // // console.log(name);
    // const skillList = skills.map((skill, i) => (
    //     <tr>
    //         <td key={i}>{skill}</td>
    //     </tr>
    // ));
    // const { name, skills } = useSelector((state) => state.jobs);

    const jobs = useSelector((state) => state.jobs);

    // return (
    //     <div>
    //         {title ? (
    //             <table style={table}>
    //                 <thead>
    //                     <tr>
    //                         <th>기술</th>
    //                     </tr>
    //                 </thead>

    //                 <tbody>
    //                     <tr>
    //                         <td>{title}</td>
    //                     </tr>
    //                     <tr>{name}</tr>
    //                     {skillList}
    //                 </tbody>
    //             </table>
    //         ) : (
    //             <h1>존재하지 않는 페이지 입니다!</h1>
    //         )}
    //     </div>
    // );
    return (
        <div>
            {title && jobs[title] ? (
                <table style={table}>
                    <thead>
                        <tr>
                            <th>기술</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{title}</td>
                        </tr>
                        <tr>{jobs.name}</tr>
                        {jobs[title].skills.map((skill, i) => (
                            <tr key={i}>
                                <td>{skill}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1>존재하지 않는 페이지 입니다!</h1>
            )}
        </div>
    );
};

export default Job;
