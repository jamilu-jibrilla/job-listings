import './Card.css'
const Card = ({item, handleRoleFilter, handleLevelFilter, handleLanguageFilter ,handleToolFilter}) => {


    return(
        <div className="Card">
            <section className="first-row">
                <div className='card-wrapper'>
                    <img src={item.logo} alt="" />
                    <div className='first-row-details'>
                        <div className='left-tags'>
                            <span>{item.company}</span>
                            {item.new ? <span  className='new'>NEW!</span> : ""}
                            {item.featured ? <span  className='featured'>FEATURED</span> : ""}
                        </div>
                        <div>
                            <h4>{item.position}</h4>
                        </div>
                        <div className='left-details'>
                            <span>{item.postedAt}</span>
                            <span>.</span>
                            <span>{item.contract}</span>
                            <span>.</span>
                            <span>{item.location}</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="second-row">
                <h5 onClick={handleRoleFilter} >{item.role}</h5>
                
                <h5 onClick={handleLevelFilter}>{item.level}</h5>
                
                {item.languages.map(language => (
                    <h5 onClick={handleLanguageFilter}>{language}</h5>
                ))}

                {item.tools.map(tool => (
                    <h5 onClick={handleToolFilter}>{tool}</h5>
                ))}                
            </section>
        </div>
    )
}

export default Card