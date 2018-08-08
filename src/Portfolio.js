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
                                    <a href="https://newsamp.netlify.com/" target="blank"><img
                                        src="https://lh3.googleusercontent.com/mHDtXdSnjxCn_hxLyLmPqNWaTBLmh3vPTBeLw2dORqkakdGGXlW-cIBKoBX58Pkd-7CS595yk_kHobJc4e2nN2LIHMoGdMkh3ESWjsxqkpyXQrbmabzyVxiRtCKolTAKC3tmbBcuJ0FBv0whV1gNjgpqTZRYv5n6z1SrJ794jUWjGOhUbHC8bXHO4650ysG5jFS3vQCD_M88FLeoZaDpLJGg7Auc1PiZxRGqijqKyrgxuvf-QP5Zvhk7CWO7AjR9cYjADcd_EMfAYIQcbGK6th-22946x1aCdWxXC1pRQccfRcYPyDzul3xCv85vWIUaqlrEXs59snSTGWWHUP3oQ1BdnWu9oSkYZ_GvkGHNLf0x2WowqE-OAj3X0OPxiOcmiOhjqqnDhsQ_Z5DlT7eRKXcde0cexIKeoLi7fFywPwQA95BcvwjCgwA-YLY7_t2B_yHqRn_3kXuR9TU6TLPNNIuW2RNe7fVctFHPZraa081B6gQD_mQNl57tgoC-0fh1CkwUtIP96uG-4t6Qh4by8k1i2N1FM-2vX2cfqvtWoFmZaAXEd2rgSs00Qb1Ff8HwJSupUefkiWqaP7TNmVWR2CrFPMtyfjbS60yAjYjPgJ-wgOB8VlhO5h8t-Xsrlnk0JIH4EszLXQemeo20twAWYjjmlci7gOTO=s500-no"
                                        alt="Smile At My Profile" className="imageportfolio"/></a>
                                    <p>Smile At My Profile</p>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <a href="https://fetch.netlify.com/" target="blank"><img
                                        src="https://lh3.googleusercontent.com/Qg5ikA-7_UHuCQxcaxSuk4XxJEpWxjPKvQta2IM9LccvqBRxeYhQJ2dfDvxBbAAIIvfoQUaHXHTe0SbVEH2cBip7GVJbHoTYosXoX5qYYlHD2EfzoSo4TX5oaDJySnvU945iDDL_smjr-GYTxfC5xpoep565Lkdn4p0c_uGbWSOPqkipocu27XkxTioj6ZLYpRxTeSow8aB1EeA9s2lLNatpXC3o6E_qR9v2lH2LClo-mobdUHhKQTw5wK9Ja0zCkg-bv4VfXyqlY2QIll3d7ko3j4dNQP9qYIVDqszJEjEnkX4Vgdrl2RP5cPIpITTzuHRdcEHkVg2euQs02ElPrVJ9HuWqroBTMbshssegjfSGdZGU-y4TLho-O4bvv1UDa_hBiMtiOYkA73_1ICDWu79wucT3xyVfCQ2hcpDKGH75mGX3BzoKPpfUPaWTjr1aEudJPyulW-2ZzlBcVwsMwSosWRaMEG4w5cDc7W8K_mbOtvZpNKUUydOxM4oHV_ooS1u7GR1nonPkfdMeIVZluwMSq9rG8z_vwuxdfoIPGWWlPJtg4Bw58mL0uZeayBqp4Z8s5eUzUBmu_G6n7svD2_bTcSZC4a0EDR-1Hm76Ktp0l0d8dGis0ltSrk-T3YmgbVwTZkzGH164h-byefASbub2NDn5qg3i=s500-no"
                                        alt="Fetch Website" className="imageportfolio"/></a>
                                    <p>fetch.netlify.com</p>
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
                                    <a href="https://fun-food-friends-d09e7.firebaseapp.com/" target="blank"><img
                                        src="https://lh3.googleusercontent.com/VLcMAS701eJJPpKa7ADwe1u9MJfAE8Jd5-lSfUt19Dv5Ym7VWOQrcykoQHDXYaHdxbvk6PBlQZvAjHfiZu7uyuRBNT1Mtx_WNiseM6T_7Q3s1Num55iblq6WHFKU7XIJ4qjJPSZBRmC3lVrPccM4LDVeWs8wviVyvYCyPpjUWuXoVKnTEnmTa8ICzL76GQaKZBSoKUK-icPu_zfuf-an8IDIc0bpiaN_oHLy1ia5uquSM5AxuFXjWoav_ktwcs2aMZymP0HIyUoWvB8hu4nDGX8NZnzfoFPDM9VBzGPpNCZi9mvC4vZJ8IbaUFxnHEgcYM0kK8D1AGWTHynQwy_Xt8BCxK1I_yz1jF69zJ6Ju1R8TbH0oLwGQHFjcLUjuswBOfqgt0zEg4KxJBrQOxvVJ6iyC421GJTUTPLrw3r3BujTjbEZMUN4tUaqL3YKqx6DuaVuy7ifioQjoyhsQ95eAmZHHyDv72TQq5zMZTk0nLf36-xlHkGAJnP0FInCcugw9fd9vox5C1whBSU8vbhwleup0PGz5W1rLhfkLbGQ8MwoOs_7lPj9_LMSHMIPwc_aQ8uPxD3jfCtkqSFeUPFBY1ao5QJx002WL96w-AlWADMDueA9Bwh9Hm3CTdHoPGwPdHw5KBHlrFC8lFLWOP5F3vmIUc4Ily6t=s500-no"
                                        alt="Shopping Brain" className="imageportfolio"/></a>
                                    <p>Shopping App "Shopping Brain"</p>
                                </div>
                            </div>
                            <div className="col">
                                <div>
                                    <a href="https://build-ccjcuqcccj.now.sh/" target="blank"><img
                                        src="http://content.sportslogos.net/logos/6/234/full/3412_utah_jazz-alternate-2017.png"
                                        alt="Utah Jazz Site" className="imageportfolio"/></a>
                                    <p>Utah Jazz Fan Site</p>
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