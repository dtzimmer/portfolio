import React, {Component} from 'react'
import './App.css';
import { Link } from 'react-router-dom'

class Portfolio extends Component {
    render() {
        return (
            <div>
                <body>
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
                    <figure>
                        <a href="https://build-ccjcuqcccj.now.sh/" target="blank"><img
                            src="https://lh3.googleusercontent.com/wByre9jQSBMf0MpNrfJEv8GuaS3q3TLGpicRSj3ZBU4anB4MhVFb6K5GltnqMCYO_Gw15iRTco9Jp_yBf4XV8oF9hCqMKwp2Ln1GnGvI_Xq_wGYZ5pOg8I5SWTN_ih6JcZ1ql2r0dlkFmsPK48Ch_rviOVw6f0vt3VwvHdyUTbZCMdnr1EEMGikMrsTESKJcv3NiCYJL7Miy5DwAfXTsw3OnreaDSRZq7EwUq30NafCzZScp6YElOxILD-nVJXD4wMh56upHGPHHfVJQccTfuw06_LSVknSdOpa0Z5KX-_qZkbWHBzcNDTh_7pEZr3yKr21-uKyzgro5wDQiXeLgOzKg1_ZfN1aW2YOmSbnMdc_lYs_hAy4JRhlVyBHCLJxfOUaL3z_h8QMKk_6Kr_IiCgqx0gmF3-FLLpn3HKo5_GaNc9O1RBbKpPZOFdDva4usCHk-hWMX7_wIMtzWSiOylt42zh_w1fDX6aqWas36JqSmJzFKrg4Yd1IKT_EexEnDUT9iacLppwYgr6Ti_CCYnAvZsqCk06XDn2biBCqXh7aHJUaXeygppEjaXZwEUkth01NrvCglSwt_nNm9bfU55bu8BkuEXCrwkeu2W0A5NWmfk1tyfe89Omwq6pFUqDaBqI_9aT-DnCh8l_GaVYiY-5cGhnT3F3E_=w1145-h665-no"
                            alt="Utah Jazz Site" className="imagewebpage"/></a>
                        <figcaption>Utah Jazz Fan Site</figcaption>
                    </figure>
                    <figure>
                        <Link to ="NameBadgeComp"><a href=""><img
                            src="https://lh3.googleusercontent.com/1Y4A9zrUGi1VrCfvkO5JL7dVD0v2uLX0ACLJi3iVOnO31kqOjUUFtDxjcO9kP6mn-ZMgdntJ0gXlpF5Sgh-EBt0f1DTArFN8E5M0CjalaLOw5yWHm3ho0NbDIz6jU7dnNAgvM2OLd8OOSxJLmhBVi4L2B-Pnm2jt-COVgCYbDVarlDznIjwMAJg0ttXUxIevgn25v9lNV-zVA1afJGmKG-gGCVusShdWZamg6qwXo5o6wLtU-5Sx_e1EepLX_VHt8kIxpwQ5x_OM0laqRoT1z6PjYFVx2bRteMV-JyuW4fnjJmPw90lnEj-HTm3YIbSft1zj_0w36yJyrDy0gINXPY5pEbyUC0QnRrbV1Zuidu2EDpuUF4GrsKWz1scD5gNRSYgPSRMOc5jSK0rxyeDc3kb474du2dWjj9wQWwe0JgUqMJof1JS02imNbdUmHJ_yxQqsvnnqxl9ERiSC9gp_02MqykGRv2Tv67-hRe_utkLBsVsV2mozuhWmgePg4bliJtgVFFuTWI2EOJDMLxzPHoF3R-OpFtvmyrsNJILThaF1r66O46aGAycrcqMcj9xdjW9i--THO1apL8JiA-MK8zS0RUDB33o1-k1KMKgi5NftzojJrmA2XuRbZCPNlSaBYI8X52IbYwfa3lhDQLJvORKXLSoxTTlc=w448-h410-no"
                            alt="Name Badge React Component" class="imagenamebadge"/></a></Link>
                        <figcaption>Name Badge React Component</figcaption>
                    </figure>
                </section>

                <section>
                    <figure>
                        <a href="https://github.com/dtzimmer/imdbhw" target="blank"><img
                            src="https://lh3.googleusercontent.com/cS2MVeGv3r27u4UrCiRPufg3dcTZ1BrnhvsXvZlYg734OJ8nAD6XYUJ4K6ZBsMXlkGISvDJUdVb9HtFHcTikxVKec0CWPrKgpebc_3hacmqn5Cm_FNh-5Ynrc90c3TJQSpvOugmgLzl1h3BvGJr6OXRV2SuG9OMtjf-EMXZI0MgC5imxYrlZsucJxgmAsU9UXGNegbu7-4oD3if9BWXIEFWu0WNoFEUbilwbopgQws4w1ND-OWYofqILeVrL2_xHOHdDEhj6u6IGr_WEL6fxijEthjboDb8MmEJ6gp4S6lUQbsRM8ZloyGb1ZE1RSND3KCpsLtg1gRgLqazg1Vak8_H4xqqV2XFVB_akLQxH_qTIGGxImqa7a8KalGgswrBPaHtisXl3WhA41TAlRtIJtQBHkWzv4b1-2nr1Ctk3BQPRusuXe7WsINODJllwYPjhhnPcUPUm70Z6O0CdTKQB-yOcEILtjHDu4u1M8uwifhwwVeFIqSFZ3cda85YDkrJnbbCsEb2eobFlEW--YNEDxdEGlRf6NJhVm-n8hNAaUUG8JqqqygBG68igbeWbp-BwXKWzGKdqDzY6U-Yefk3vyJd_7pxcgg4IZQS79H5RFcMgRmNbp62DPIAYUu4orhfJu5e0DCtkvURvZwgnduawMdlLT3I_ZxCA=w1127-h694-no"
                            alt="IMDB" className="imagewebpage" /></a>
                        <figcaption>Recreate IMDB Website</figcaption>
                    </figure>
                    <figure>
                        <img
                            src="https://lh3.googleusercontent.com/KTu8LnnUsCMDK03uJJBlBGHHtP9b5lotxROPtGdgYxDDPzEPiY9cZIBAK9JBhawP7iPkggK5vTcqcbbNgkHBYjKRz1LR1LnoBr1-AM4H55EFNtXnnkWtrF9jw7iR8IH5j_trIxSdRGKef_UdPa-wzN-_uMPgACtFzkmdfcjqV1Zk9VzJ-sMsh1iy-CCC3h_G2SjCDRcCK0P1fVFRUl1DYGBceayqIvnXGmVvM4R8zXLJqPd0n8dLQg04yIGoyp15-LJHRbtoPDQtxEGtnPRX9-YB-FZvYy5OTpO_tp4ka58lixLZmDqnleKkcOtJe3lMwvo6pLli_wbBFLgvp1WNLZwxBSsurg7rxns4sBtLoZLW1DN_U5Am2uh6kemD7PZ7v3v6qK38DRvvbplfIq9c7yKGNRu0kyNQj2e00bvgSo-FcXK42bw5g8M5hcYO_O0NYj1E66Atezw3GY40BpPu6KNeq81deEjINKF4fOdnwLJ3xTPL9unGFfZUa7ilGaB6OeTWiMyTZ6SWZUcWTH8Vx0DS4r0ERtqGlN_ym68jVj0KMKzG5MKSo3Rzs_QOhs2msjPOAs_aSKdkIIoCU0jNEHtWkvuwclt_hmNqWRRmq7ArGBg3mp01vBgY8UCqw_xUtdO9d8zihHs5AjWhzOyIQ_qdPgQxoAwC=w2422-h1818-no"
                            alt="Drawing" className="image"/>
                        <figcaption>College Art Background</figcaption>
                    </figure>
                </section>


                </body>
            </div>
        )
    }
}

export default Portfolio