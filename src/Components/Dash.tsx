import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useNavigate } from 'react-router-dom';

const Option = {
  chart:{
    type:"bar"
  },
  title: {
    text: "My First Charts"
  },
  subtitle:{
    text:"My Subtitle (my chart)"
  },
  series:[{
    name:"sanju",
    data:[2,4,6]
  },{
    name:"shivu",
    data:[3,5,7]
  }]
}

const DashPage = ():JSX.Element => {
  const navigate = useNavigate()
  const HandleLogOut=()=>{
    localStorage.clear();
    navigate("/")
     
  }
  return (
    <div>
      <h1>Dash Board</h1>
      <div>
      <HighchartsReact  highcharts={Highcharts} options={Option} />
      </div>
      <button onClick={HandleLogOut}>LogOut</button>

    </div>
  )
}

export default DashPage;