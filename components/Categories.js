import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button className={className} style={style} onClick={onClick}>
            <img src="assets/img/prevBtn.svg" />
        </button>
    )
};


const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={`${className} bg-black`} style={style} onClick={onClick} />
    )
}

var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
};

const Categories = () => {
    return (
        <div className="max-w-[1184px] m-auto mt-10">

            <h1 className="text-center text-4xl font-bold mb-10">Kullanmadığın eşyaları sat, çevrendeki fırsatları keşfet!</h1>

            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
                </div>
            </Slider>

        </div>
    )
}

export default Categories;