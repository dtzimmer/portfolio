import React, {Component} from 'react'
import './App.css';
import { Link } from 'react-router-dom'

class WorkExperience extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to ="/"><a href="">Home</a></Link>
                    <Link to ="Portfolio"><a href="">Portfolio</a></Link>
                    <Link to ="Contact"><a href="">Contact Me</a></Link>
                </div>

                <header className="main">
                    <h1>Daniel Zimmerman</h1>
                    <h2>Work Experience</h2>
                </header>

                <section>

               <article>
                   <h3> Education </h3>
                   <ul>
                       <li>BS Elementary Education (K-6)</li>
                       <li>Minor/Certification: Teaching English to Speakers of Other Languages (TESOL)</li>
                       <li>Cumulative GPA 3.81</li>
                   </ul>
                 </article>


                 <article>
                     <h3> Technology/Design Experience </h3>
                     <ul>
                         <li>2-D Design</li>
                         <li>Google Education</li>
                         <li>Education Technology</li>
                     </ul>
                 </article>
                </section>

                <section>
                <h3> Work Experience </h3>
                </section>

                <section>
                    <div>
                        <img src="https://lh3.googleusercontent.com/WLQ64qQMrZl9wEbhPy_0WPCFWeA7b1xI0SzL7pURLjhS9rxNH8IKdz-Hk0_yispl9rKupro7-dXIlZpvQqh_O6ijpuPcs7OrMYI8t5GbYfQ_OYfORD7n-E8uwlqbK4ztawiCVHNLib7Ksxca065oDxbM7d1ammhRfcgwZddmEPf4cXYVHKI8EZSFXJXsNMy-j75UJLD7_kRSd2Ms1BebMFrdC7-GChF04yOo9AbgEfCz4IlBwHCAyS-3-8O5RunDUSzVDQC9TC57EEljf2CaKfdUHWkW4JHlJtpPniSdKw-7Mjcl4d1yPqSHTLXrHiNzFc_9r8HAVklDWICn5Lj3IWtgjCAtbvTv-_labs__Xth4u4Ezs8o3XeNBNpx-LAnlB4LelGwCn2uy5bfSL7npMBNCK3npUrAXM8EsQl-AJrTFHNsu30lMZIiJLocSDsGInyvmO2hrWkG2YD7ZO2x2xii3q2a_kOEPPk1p3N8cEkw4ilzWKJF7vfaHaTDcU0MSLFD-hpuJlbGkkHwZ2LSDT7u3pyxUravevVouARjl_9S8MZMmQuFBpuHOh0WtkHsDIhL5HrVAL3PxM6WG6I9l_NKNn2jp-h4xZmngXO6pFlxgMysVU0OskkWfbqR38HfvLPeodNeR1Byxw7qO8kCXMKMA5ab7r-R2=w846-h540-no" alt="Work Experience Timeline"/>
                    </div>
                </section>

            </div>
        )
    }
}

export default WorkExperience