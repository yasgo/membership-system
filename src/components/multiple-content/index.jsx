import './style.scss'
import { useState } from 'react'

const MultipleContent = (props) => {

    let [pageIndex, setPageIndex] = useState(0)

    return (
        <div className="multiple-content-container">
            <ul>
                {
                    props.contents.map((item, index) => <li onClick={() => setPageIndex(index)} className={pageIndex === index ? 'active' : null} key={index}>{item.title}</li>)
                }
            </ul>
            <div className="multiple-content">
                <h3>{props.contents[pageIndex].title}</h3>
                {
                    props.contents.map((item, index) => {
                        return (
                            pageIndex === index && (
                                <item.content key={index} />
                            )
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MultipleContent