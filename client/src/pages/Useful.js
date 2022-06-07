import { React, useEffect, useState } from "react"
import Menu from '../components/Menu'
import pic from '../stylesheets/pic.png';
import MenuForAuth from '../components/MenuForAuth'

export const UsefulPage = () => {
    const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")));

    useEffect(() => {
        setId(JSON.parse(sessionStorage.getItem("id")));
    }, []);

    if (id === null)
        return (
            <>
                <div className="up">
                    <h1>Damshke's Tarot</h1>
                </div>

                <Menu></Menu>

                <img
                    src={pic}
                    alt="pic"
                    className="picture"
                />

                <div className="center">
                    <h3><strong>In progress...</strong></h3>
                </div>
            </>
        )
    else return (
        <>
            <div className="up">
                <h1>Damshke's Tarot</h1>
            </div>

            <MenuForAuth></MenuForAuth>

            <img
                src={pic}
                alt="pic"
                className="picture"
            />

            <div className="center">
                <h3><strong>In progress...</strong></h3>
            </div>
        </>
    )
}