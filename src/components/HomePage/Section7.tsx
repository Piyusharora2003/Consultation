import styles from './home_style.module.css';

function Section7() {
    return (
        <div className="my-28 w-full flex flex-col">
            <div className="font-extrabold text-2xl text-center mb-4">Ready to take the first step towards an exciting career journey?</div>
            <div className="w-2/5 mx-auto mb-8 text-xl text-center">Explore Bigstartups Network's "Work with Startups" section today and unlock a world of possibilities. </div>
            <button className={` ${styles.join_now_btn}  rounded-full`}>Join Now</button>
        </div>
    )
}

export default Section7;