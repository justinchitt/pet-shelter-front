import corgis from '../images/corgis.jpg'
import cute_cat from '../images/cute_cat.jpg'
import smiling_puppers from '../images/smiling_puppers.jpg'
import cute_puppy from '../images/cute_puppy.jpg'
import doggy_friend from '../images/doggy_friend.jpg'
import doggy_licks from '../images/doggy_licks.jpg'
import sleepy_kitty from '../images/sleepy_kitty.jpg'
import sunny_kitty from '../images/sunny_kitty.jpg'

function Home() {
    return (
        <div className="home">
            
            <div id="photo-container">
                <div class="photo"><img src={doggy_friend}></img></div>
                <div class="photo"><img src={doggy_licks}></img></div>
                <div class="photo"><img src={sunny_kitty}></img></div>
                <div class="photo"><img src={corgis}></img></div>
            </div>
            
            <div id="welcome">
                <p>The Best Friend Business is a management resource for organizations in the business of helping people find their best friends.</p> 
                <p>As a shelter resource, it lets you keep track of all the animals in your system, the adoption applications submitted for every animal, and shelter locations—all in one convenient place!</p>
                <p id="quote">"Until one has loved an animal a part of one's soul remains unawakened." — Anatole France</p>
            </div>

            <div id="photo-container">
                <div class="photo"><img src={smiling_puppers}></img></div>
                <div class="photo"><img src={cute_cat}></img></div>
                <div class="photo"><img src={cute_puppy}></img></div>
                <div class="photo"><img src={sleepy_kitty}></img></div>
            </div>
        </div> 
    )
}

export default Home
