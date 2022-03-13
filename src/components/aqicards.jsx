export const Aqicards = (props) => {
  return (
    <div>
     <div id='row'>
       <div className="thumbnail">
          {props.data
            ? props.data.map((d, i) => (
                <div>
                <div key={`${d.name}-${i}`} className='offset-1 col-md-3 col-sm-6' style={{position:"relative",top:"100px",marginBottom:"130px"}}>
                  
                  <div>
                    {' '}
                  
                    <img src={d.image} alt='...' className='team-img' />
                    <div className='caption'>
                      <h3>{d.titl}</h3>
                      <p>{d.description}</p>
                      <a href={d.link+ '/' }><p>
                       Read More</p></a>
                    <a href={d.nextlink}> <p> {d.clickon}</p></a>
                    </div>
                  </div>
                  </div>
          </div>
              ))
            : 'loading'}
        </div>
        </div>
    </div>
  );
}