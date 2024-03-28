const userLayout = (() => {
    const showList = (users) => {
        let text = ``;
        users.forEach((user) => {
            text += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.address.street}</td>
                    <td>${user.address.suite}</td>
                    <td>${user.address.city}</td>
                    <td>${user.address.zipcode}</td>
                </tr>
            `;
        });
        return text;
    };
    return { showList: showList };
})();
