import { useEffect, useState } from 'react';

function Home() {

    const data = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 2,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
            "userId": 2,
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
    ]

    const handleClick = (id: { userId: number; id: number; title: string; body: string; }) => {
        let copyObj = data.filter((val) => val.userId !== id?.userId)
        console.log(copyObj);
        let find = data.find((val) => val?.id === id?.id)
        console.log(find, "aSJHBAH");
    }

    return (
        <div>
            <span> Welcome Home</span>
            {
                data.map((val, index) => {
                    return (
                        <div key={index} style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
                            <span>{val.title}</span>
                            <button style={button} onClick={() => handleClick(val)} >{val?.userId}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

const button = {
    cursor: "pointer",
    width: "50px",
    height: "25px",
    // background: "#8689ef",
    // border: "3px solid #8689ef",
}

export default Home;