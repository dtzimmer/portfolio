import React, {Component, Fragment} from 'react'
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

class Portfolio extends Component {
    render() {
        return (
            <Fragment>
                <body>
                <Header/>

                <header className="backgroundimagesections">
                    <h1>Daniel Zimmerman</h1>
                    <h2>Portfolio</h2>
                </header>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div>
                                    <a href="https://distracted-euler-7d1fbe.netlify.com/" target="blank"><img
                                        src="https://lh3.googleusercontent.com/mHDtXdSnjxCn_hxLyLmPqNWaTBLmh3vPTBeLw2dORqkakdGGXlW-cIBKoBX58Pkd-7CS595yk_kHobJc4e2nN2LIHMoGdMkh3ESWjsxqkpyXQrbmabzyVxiRtCKolTAKC3tmbBcuJ0FBv0whV1gNjgpqTZRYv5n6z1SrJ794jUWjGOhUbHC8bXHO4650ysG5jFS3vQCD_M88FLeoZaDpLJGg7Auc1PiZxRGqijqKyrgxuvf-QP5Zvhk7CWO7AjR9cYjADcd_EMfAYIQcbGK6th-22946x1aCdWxXC1pRQccfRcYPyDzul3xCv85vWIUaqlrEXs59snSTGWWHUP3oQ1BdnWu9oSkYZ_GvkGHNLf0x2WowqE-OAj3X0OPxiOcmiOhjqqnDhsQ_Z5DlT7eRKXcde0cexIKeoLi7fFywPwQA95BcvwjCgwA-YLY7_t2B_yHqRn_3kXuR9TU6TLPNNIuW2RNe7fVctFHPZraa081B6gQD_mQNl57tgoC-0fh1CkwUtIP96uG-4t6Qh4by8k1i2N1FM-2vX2cfqvtWoFmZaAXEd2rgSs00Qb1Ff8HwJSupUefkiWqaP7TNmVWR2CrFPMtyfjbS60yAjYjPgJ-wgOB8VlhO5h8t-Xsrlnk0JIH4EszLXQemeo20twAWYjjmlci7gOTO=s500-no"
                                        alt="Smile At My Profile" className="imagehomepage"/></a>
                                    <p>Smile At My Profile</p>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <a href="https://fun-food-friends-d09e7.firebaseapp.com/" target="blank"><img
                                        src="https://lh3.googleusercontent.com/LCpXzSKpkXwAyEpDn0wVEsdMAucSiYROXfsoeLlnY1LpVg6QWX6YDqjGV6dVrV6bx7LHKwnMFnNKGsVU6RnfJInHlZrj-def6XyFJTe9F8RDr_3NiQMH1eo_UBM2nA9fuMIx--k7fYngqa-gKEv66_2x77sJ_hHWU27zL-salE8pqaCAoimPxgOkQhhLwSiaKkZ99ZtOAgL0QYcDdRA2udTrPaf7OH2EK1yL72SjseoAN1oYQ8s08wp6CK5Wt-IgRcWgVlBu79zgznlVEzySXxgwOaU7l1jkcSYaMq565K8GAbc_JSMzvGQGx0UqtpcnzXyJGi5Pph-oisr0lzd0bjozkMW-VY3KGzYlf1ybZaWnwsj3iAXaD9chqlyk0ZUkULoymL-KuHD943rdDGJi0ABIoEvV261sg6y53ZvG0RdFWffJhIRUgyzhVRQdRKgkEh-PjHwSH9MlOHxhVZJAQnC7e8OcP9TABB4e_4fYXMDPutcS99eyZMtSzH-WYfbG45nqDWguKAidKsERlT4LgLAtWHVo-AzDATE0pb2OQyrDmDSwxTbkh-mhqY3Frnp1Y4xof8uJyKCX0_9XSOak0-V7J4rZz6f3Uf9ScniwhjkJzKhOCwyP5CPZnGIatGwHlABQuHf1vxe1FH56wypgqbbbCmrLkune=w376-h665-no"
                                        alt="Shopping Brain" className="imagehomepage"/></a>
                                    <p>Shopping App "Shopping Brain"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div>
                                    <a href="https://build-ccjcuqcccj.now.sh/" target="blank"><img
                                        src="https://lh3.googleusercontent.com/wByre9jQSBMf0MpNrfJEv8GuaS3q3TLGpicRSj3ZBU4anB4MhVFb6K5GltnqMCYO_Gw15iRTco9Jp_yBf4XV8oF9hCqMKwp2Ln1GnGvI_Xq_wGYZ5pOg8I5SWTN_ih6JcZ1ql2r0dlkFmsPK48Ch_rviOVw6f0vt3VwvHdyUTbZCMdnr1EEMGikMrsTESKJcv3NiCYJL7Miy5DwAfXTsw3OnreaDSRZq7EwUq30NafCzZScp6YElOxILD-nVJXD4wMh56upHGPHHfVJQccTfuw06_LSVknSdOpa0Z5KX-_qZkbWHBzcNDTh_7pEZr3yKr21-uKyzgro5wDQiXeLgOzKg1_ZfN1aW2YOmSbnMdc_lYs_hAy4JRhlVyBHCLJxfOUaL3z_h8QMKk_6Kr_IiCgqx0gmF3-FLLpn3HKo5_GaNc9O1RBbKpPZOFdDva4usCHk-hWMX7_wIMtzWSiOylt42zh_w1fDX6aqWas36JqSmJzFKrg4Yd1IKT_EexEnDUT9iacLppwYgr6Ti_CCYnAvZsqCk06XDn2biBCqXh7aHJUaXeygppEjaXZwEUkth01NrvCglSwt_nNm9bfU55bu8BkuEXCrwkeu2W0A5NWmfk1tyfe89Omwq6pFUqDaBqI_9aT-DnCh8l_GaVYiY-5cGhnT3F3E_=w1145-h665-no"
                                        alt="Utah Jazz Site" className="imagehomepage"/></a>
                                    <p>Utah Jazz Fan Site</p>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <a href="https://github.com/dtzimmer/imdbhw" target="blank"><img
                                        src="https://lh3.googleusercontent.com/cS2MVeGv3r27u4UrCiRPufg3dcTZ1BrnhvsXvZlYg734OJ8nAD6XYUJ4K6ZBsMXlkGISvDJUdVb9HtFHcTikxVKec0CWPrKgpebc_3hacmqn5Cm_FNh-5Ynrc90c3TJQSpvOugmgLzl1h3BvGJr6OXRV2SuG9OMtjf-EMXZI0MgC5imxYrlZsucJxgmAsU9UXGNegbu7-4oD3if9BWXIEFWu0WNoFEUbilwbopgQws4w1ND-OWYofqILeVrL2_xHOHdDEhj6u6IGr_WEL6fxijEthjboDb8MmEJ6gp4S6lUQbsRM8ZloyGb1ZE1RSND3KCpsLtg1gRgLqazg1Vak8_H4xqqV2XFVB_akLQxH_qTIGGxImqa7a8KalGgswrBPaHtisXl3WhA41TAlRtIJtQBHkWzv4b1-2nr1Ctk3BQPRusuXe7WsINODJllwYPjhhnPcUPUm70Z6O0CdTKQB-yOcEILtjHDu4u1M8uwifhwwVeFIqSFZ3cda85YDkrJnbbCsEb2eobFlEW--YNEDxdEGlRf6NJhVm-n8hNAaUUG8JqqqygBG68igbeWbp-BwXKWzGKdqDzY6U-Yefk3vyJd_7pxcgg4IZQS79H5RFcMgRmNbp62DPIAYUu4orhfJu5e0DCtkvURvZwgnduawMdlLT3I_ZxCA=w1127-h694-no"
                                        alt="IMDB" className="imagehomepage" /></a>
                                    <p>Recreate IMDB Website</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
                </body>
            </Fragment>
        )
    }
}

export default Portfolio