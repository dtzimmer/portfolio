import React, {Component} from 'react'
import './App.css';
import { Link } from 'react-router-dom'

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to ="/"><a href="">Home</a></Link>
                    <Link to ="Contact"><a href="">Contact Me</a></Link>
                    <Link to ="WorkExperience"><a href="">Work Experience</a></Link>
                </div>

                <header className="main">
                    <h1>Daniel Zimmerman</h1>
                    <h2>Portfolio</h2>
                </header>

                <section>
                    <div>
                        <img
                            src="https://lh3.googleusercontent.com/NEG0ET01JTwNp-0rcHVz7GmuBAz7Z7D5jFRBxONV26fHaC7bGBr3wuLiskSR9qfyAZXzi8eq_G1ZF8PzVj8SIbARnmpaPjQh0Qo9wrT4A7jO-2DqARdZDrmsS3AkPJvr2WILLRH1GD21lyhbsUV_TnUB8rCjKT-RjynvmucyBIFuqWjKfpcB62nKpr6ITqV76k8-ewj-fBVSB2iig9kWaA_7oqTfW8Kw0yGb6zmuK1jat9MCtSYF0whH91w-LV9KDD8Jey4wnqizzWcBhjPh5LioReGz-KXHmnIKsApusSe6LRRcS9NuoOwBQnVfSYdDAi1Su1tuu1zf23kfaHnBOYpA3-QOiHhB_KimSZ8D1ElDoYfBU1YRTSRWMO4moeFWs6HD-GY11eRE5F7xzIjfe9jCUisLDYJOaEDUsW7T6EG9eFCZ0Hy6B2X5Uij9gO4nxynCmzM3cxJ3jfksLUKWUtoBv5FlZzDvJTaX2EYItD4P2tAIuQdRT6VPA24O6xgcrXIR7LorIuxr_HxfuM7KDeaRIzqh5Y4pn5YLWAsDX4ZXC-fET_iTH4FyxJEizQm4DR4f88uaE8Aumz0tJfKBU1uWMal3m1Kn_Balt60=w2136-h1678-no"
                            alt="Tribute Page" class="image"/>
                        <p>Tribute Page on Code Pen</p>
                    </div>
                    <div>
                        <img
                            src="https://lh3.googleusercontent.com/pwVazAUCDCvI6SgcfvVaOJQjZWLLo788zYzE2Mq0_aMLNoUaYVQv1vjnh8RJGVAQbf_jBW9mumw2MhbUnto6DSY1ycKmRvRTPtmVby80v0C49gnG5Md1V3e0vsMkb0vQFRiYTs_tCPWnjI3mIw-Gm9FMdAsuhupoXquq8AuDu74CuYNhmd34D7GxWOHknyxEKEaXI_D4sDR3NtEm-VgI7qzr1QYYVraqp2iSNp32UoNkpktVvgdWZKaiqx0z6RZnWVuigFTFNO5VuqNLX01-9bDFaRdS_HatDJrGkM8hV9Q1xYikXgXY97C71Gf-UXBXudvJXiUgNLCZdr0PZC3DL2fpgsFR35fjjEDfynE77W2TO2Wu0stK7g2LQn_AUf6S9I2WoWXUyoEf9oJCpFpKLo3UM-oghjptAReBlVViuV87fu6FPjp4I-f3Lt3VJFqQkdvRgWMzy9T0ZByPfEXzqYz7CwF_FiW3DEER_fvAuBBaaj9FUn3A2K__RrRzuuAKZlZwMUaP0BjNoX-cmOYw_KQpkxZKx7NmJGrGyEgyR7e4nIyAMzp8HhpjJQjox0G4bf2l8eh93mKN5qkTze4SKxY1KG32U0apxLd8FmoDay9bY75EUl0ZMTTQeHgPrtnsj4qEHcy51KZ6ENAExdp3GWfpQexHir_T=w1754-h1238-no"
                            alt="Certificate" class="image"/>
                        <p>Coding Certification</p>
                    </div>
                </section>

                <section>
                    <div>
                        <img
                            src="https://lh3.googleusercontent.com/Bz4mBjCRz0em14inD2mXm7GvkD8w4c5PufT16pSFEu9u_jb2A-8Pi5s8MwyZtU9ogGMPV6K2BC2KOmmPmJsY7dNNPHPZWGH4izIIa6FZD6sbZ-Ezfg6eoem02w9nDdqRAoKwo8JMfiIcJEmOboHk6ETrLmmJ0Zs0C-EYh7j2HfR_2QaLXgxvPDnVO_aqUioc_pzENzF3pp3JE9EXti5Aiu-evu7elZaoj4dybz2vI0LsiSClzfFPVIjPUZjB6N7iRFBacRhTPTAju2gXLhBD2XGmVzpQwlBPKKGBhvUC5J8A4at0ZkC5SnDTfr7v2IY8YAhPXNSlfDd1kGYDpWSP_m31IuXBXmKsQ8eo0nTmiqtLCPOnNhs_RDffEDEu0uPMtpDYDMl2rvpPX2DqrcMuCpVnsRaScBc9SuV6EOPo7x-UMzJ0-siSlgVRqI3kCnRlhJjr86u-cUm2VMD81IRyLAKIMN8nNHg6Hv0GjLj29qaiMlMMV2TWQeEv_0X6DaW9QNlcC_Dq8BqGKxSIRnqf0LKM1Me46-sxOjVuPG7kOi5XxdwxKWli0JaBEWbWZt3YEK0NJ35WuYWrZA_TIBP06CuqAvCFosRa7_PDis5xgHbhtfIB9BaN56ZATuB1E8fO6CVYwrhZTZk2Aw-OiapojCgNJdOdHqiI=w2856-h1694-no"
                            alt="YouTube" class="image"/>
                        <p>YouTube Channel "Illustrate to Educate</p>
                    </div>
                    <div>
                        <img
                            src="https://lh3.googleusercontent.com/KTu8LnnUsCMDK03uJJBlBGHHtP9b5lotxROPtGdgYxDDPzEPiY9cZIBAK9JBhawP7iPkggK5vTcqcbbNgkHBYjKRz1LR1LnoBr1-AM4H55EFNtXnnkWtrF9jw7iR8IH5j_trIxSdRGKef_UdPa-wzN-_uMPgACtFzkmdfcjqV1Zk9VzJ-sMsh1iy-CCC3h_G2SjCDRcCK0P1fVFRUl1DYGBceayqIvnXGmVvM4R8zXLJqPd0n8dLQg04yIGoyp15-LJHRbtoPDQtxEGtnPRX9-YB-FZvYy5OTpO_tp4ka58lixLZmDqnleKkcOtJe3lMwvo6pLli_wbBFLgvp1WNLZwxBSsurg7rxns4sBtLoZLW1DN_U5Am2uh6kemD7PZ7v3v6qK38DRvvbplfIq9c7yKGNRu0kyNQj2e00bvgSo-FcXK42bw5g8M5hcYO_O0NYj1E66Atezw3GY40BpPu6KNeq81deEjINKF4fOdnwLJ3xTPL9unGFfZUa7ilGaB6OeTWiMyTZ6SWZUcWTH8Vx0DS4r0ERtqGlN_ym68jVj0KMKzG5MKSo3Rzs_QOhs2msjPOAs_aSKdkIIoCU0jNEHtWkvuwclt_hmNqWRRmq7ArGBg3mp01vBgY8UCqw_xUtdO9d8zihHs5AjWhzOyIQ_qdPgQxoAwC=w2422-h1818-no"
                            alt="Drawing" class="image"/>
                        <p>College Art Background</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Portfolio