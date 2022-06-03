import "./styledcomponents/Profil.module.css"
let p = {
    'content':"Profil_content__jQ-QQ"
}
function Profile() {
    return (
        <div className={p.content}>
            <div><img src="https://c0.wallpaperflare.com/preview/117/132/59/state-cityscape-landscape-wide.jpg" alt=""/>
            </div>
            <div>ava + descr</div>
            <div>my posts
                <div>new post</div>
                <div className='posts'>
                    <div className='item'>post1</div>
                    <div className='item'>post2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;