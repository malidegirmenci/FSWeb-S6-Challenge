import styled from "styled-components";
import Karakter from "./Karakter"
import Search from "./Search";
import { useEffect, useState } from "react";
function Karakterler(props) {
    const { data } = props;
    const Karakterler = styled.div`
        display:block;
    `
    const [search, setSearch] = useState("");
    const Space = styled.div`
        height:3rem;
        width:3rem;
    `
    const [filteredUsers, setFilteredUsers] = useState(data);
    function handleChange(evt) {
        setSearch(evt.target.value)
    }
    useEffect(() => {
        const searchResult = data.filter(user => user.name.includes(search));
        setFilteredUsers(searchResult)
    }, [search, data])
    return (
        <Karakterler>
                <Search search={search} handleChange={handleChange} />
                <Space></Space>
                {
                    filteredUsers.map((item, index) => {
                        return (
                            <Karakter data={item} key={index}></Karakter>
                        )
                    })
                }
        </Karakterler>
    )
}

export default Karakterler