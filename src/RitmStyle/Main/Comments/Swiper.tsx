// Import Swiper React components
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import s from './Comments.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const SwiperWrapper = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            // slidesPerGroup={1}
            // loop={true}
            centeredSlides={true}
            // navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
            {({ isActive }) => (
                    <div className={isActive ? s.active : s.notActive}>
                    <h2 className={isActive ? s.commentatorsNameActive : s.commentatorsNameNotActive}>Кира Иванова</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet.
                        Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et.
                        Volutpat vestibulum a lectus sed blandit.
                        Venenatis urna mattis eu enim molestie iaculis et aliquet.
                        Velit in pellentesque vestibulum phasellus orci.
                        Fermentum sed phasellus aliquam nulla non aenean.
                        Quisque id nunc, mauris potenti a massa. Fermentum at elit,
                        convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas.
                        Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. </p>
                </div>
                 )}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <div className={isActive ? s.active : s.notActive}>
                        <h2 className={isActive ? s.commentatorsNameActive : s.commentatorsNameNotActive}>Александра Дмитриева</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet.
                            Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et.
                            Volutpat vestibulum a lectus sed blandit.
                            Venenatis urna mattis eu enim molestie iaculis et aliquet.
                            Velit in pellentesque vestibulum phasellus orci.
                            Fermentum sed phasellus aliquam nulla non aenean.
                            Quisque id nunc, mauris potenti a massa. Fermentum at elit,
                            convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas.
                            Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. </p>
                    </div>
                )}
            </SwiperSlide>
            <SwiperSlide>
            {({ isActive }) => (
                    <div className={isActive ? s.active : s.notActive}>
                    <h2 className={isActive ? s.commentatorsNameActive : s.commentatorsNameNotActive}>Яна Жернова</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet.
                        Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et.
                        Volutpat vestibulum a lectus sed blandit.
                        Venenatis urna mattis eu enim molestie iaculis et aliquet.
                        Velit in pellentesque vestibulum phasellus orci.
                        Fermentum sed phasellus aliquam nulla non aenean.
                        Quisque id nunc, mauris potenti a massa. Fermentum at elit,
                        convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas.
                        Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. </p>
                </div>
                )}
            </SwiperSlide>
            <SwiperSlide>
            {({ isActive }) => (
                    <div className={isActive ? s.active : s.notActive}>
                    <h2 className={isActive ? s.commentatorsNameActive : s.commentatorsNameNotActive}>Лола Иванова</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet.
                        Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et.
                        Volutpat vestibulum a lectus sed blandit.
                        Venenatis urna mattis eu enim molestie iaculis et aliquet.
                        Velit in pellentesque vestibulum phasellus orci.
                        Fermentum sed phasellus aliquam nulla non aenean.
                        Quisque id nunc, mauris potenti a massa. Fermentum at elit,
                        convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas.
                        Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. </p>
                </div>
                    )}
            </SwiperSlide>
            <SwiperSlide>
            {({ isActive }) => (
                    <div className={isActive ? s.active : s.notActive}>
                    <h2 className={isActive ? s.commentatorsNameActive : s.commentatorsNameNotActive}>Михаил Стрельцов</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet.
                        Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et.
                        Volutpat vestibulum a lectus sed blandit.
                        Venenatis urna mattis eu enim molestie iaculis et aliquet.
                        Velit in pellentesque vestibulum phasellus orci.
                        Fermentum sed phasellus aliquam nulla non aenean.
                        Quisque id nunc, mauris potenti a massa. Fermentum at elit,
                        convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas.
                        Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. </p>
                </div>
                )}
            </SwiperSlide>
        </Swiper>
    );
};