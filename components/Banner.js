const Banner = () => {
    return (
        <div className="max-w-[1184px] m-auto">

            <div className="h-72 w-full relative bg-primary-color rounded-lg mt-4 flex items-center">
                <div className="pl-9 mr-20">
                    <img src="https://static.letgo.com/site-images/oto_plus_logo_white.svg" alt="letgo oto" className="w-48" />
                    <p className="mt-3 text-4xl font-bold text-white ">Araba almak ve satmak artık çok kolay!</p>

                    <div className="pt-10">
                        <button type="button" className="bg-white text-primary-color text-lg rounded-3xl px-6 py-1 h-11 font-semibold ">letgo oto+ arabalarını gör</button>
                        <button type="button" className="bg-white text-primary-color text-lg rounded-3xl px-6 py-1 h-11 font-semibold ml-3">Arabanı letgo oto+'a sat</button>
                    </div>
                </div>

                <div>
                    <img src="https://static.letgo.com/site-images/oto_plus_car_2.svg" alt="car" className="h-44" />
                    <img src="assets/img/banner_right.svg" className="absolute right-0 top-0 h-full rounded-lg" />
                </div>

            </div>

        </div>
    )
}

export default Banner;