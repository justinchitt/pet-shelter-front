import styled from 'styled-components'

function Home() {
    return (
        <HomePage>
            <h1>Best Friend Finder</h1>
            <h2>A Shelter Resource</h2>
        </HomePage>
        
    )
}

export default Home


const HomePage = styled.body`
    // height: 100%;
    // width: 100%;
    background-image: url(src/images/doggy_friend.jpg);
    background-size: cover;
`
