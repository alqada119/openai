import "../assets/CSS/body.css"
import { webpagedetails } from "../content-json/common"
export const Body=()=>{
    return(
        <div className="container">
            <div className="left">App Goes Here.....</div>
            <div className="right"><div className="title">{webpagedetails.about.aboutContent}</div>
            <div>{webpagedetails.about.content}</div>
            <div className="title">{webpagedetails.about.FoundedDate}</div>
            <div>{webpagedetails.about.Founded}</div>
            <div className="title">{webpagedetails.implemented.Features}</div>
            <div>{webpagedetails.implemented.currentfeatures}</div>
            </div>
        </div>
    )
}