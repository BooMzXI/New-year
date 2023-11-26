function fallAnimation() {
    const fallAni = `
    <ul class="fall">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>`;

const fallAnimationID = document.getElementById('fallAnimationID');
    
fallAnimationID.innerHTML = fallAni;

}

fallAnimation()