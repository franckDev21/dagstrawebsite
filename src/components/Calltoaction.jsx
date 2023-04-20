function Calltoaction({text}) {
    return (
        <section className="calltoaction bg-primarycolor mt-14">
            <div className="containeur flex py-16 flex-wrap text-center justify-center gap-6">
                <p className="font-bold text-white text-3xl">
                   
                    {text}
                </p>
                <a href="#" className="btn bg-white text-primarycolor">
                    Contact Us
                </a>
            </div>
        </section>
    );
}

export default Calltoaction;
