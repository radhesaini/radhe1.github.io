import React, { Component } from 'react'
import {
 AppBar,
 Tabs,
 Tab
} from '@material-ui/core'
import TabPanel from './TabPanel'
import {Home} from './home'
import ProjectCards from './ProjectCards'
import './Projects.css'
import project1 from '../image/project1.jpg'


export class Projects extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first: '',
       value: 0
    }
  }
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  handleChange = (event, newValue) => {
      this.setState({value: newValue});
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <Home></Home>
        <AppBar position="static">
      <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example">
        <Tab label="Academic Projects" {...this.a11yProps(0)} />
        <Tab label="Personal Projects" {...this.a11yProps(1)} />
        <Tab label="Client Projects" {...this.a11yProps(2)} />
        <Tab label="Client Projects1" {...this.a11yProps(3)} />
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      <div className='card-box'>
      <ProjectCards 
              homePageImg='../image/cup-1834296_960_720.jpg'
              name="E-commerce Website" 
              duratinStart="04/2022"  
              duratinEnd="10/2022" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>
            <ProjectCards 
              homePageImg={project1}
              name="Porfolio" 
              duratinStart="10/2022"  
              duratinEnd="05/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
            <ProjectCards 
              homePageImg={project1}
              name="Snake Game" 
              duratinStart="05/2023"  
              duratinEnd="06/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
            <ProjectCards 
              homePageImg={project1}
              name="Snake Game" 
              duratinStart="05/2023"  
              duratinEnd="06/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
      </div>
      <div className='card-box'>
      <ProjectCards 
              homePageImg='../image/cup-1834296_960_720.jpg'
              name="E-commerce Website" 
              duratinStart="04/2022"  
              duratinEnd="10/2022" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>
            <ProjectCards 
              homePageImg={project1}
              name="Porfolio" 
              duratinStart="10/2022"  
              duratinEnd="05/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
            <ProjectCards 
              homePageImg={project1}
              name="Snake Game" 
              duratinStart="05/2023"  
              duratinEnd="06/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
      </div>
    </TabPanel>
    <TabPanel value={value} index={1}>
    <div className='card-box'>
            <ProjectCards 
              homePageImg='../image/cup-1834296_960_720.jpg'
              name="E-commerce Website" 
              duratinStart="04/2022"  
              duratinEnd="10/2022" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>
            <ProjectCards 
              homePageImg={project1}
              name="Porfolio" 
              duratinStart="10/2022"  
              duratinEnd="05/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
            <ProjectCards 
              homePageImg={project1}
              name="Snake Game" 
              duratinStart="05/2023"  
              duratinEnd="06/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
      </div>
      <div className='card-box'>
      <ProjectCards 
              homePageImg='../image/cup-1834296_960_720.jpg'
              name="E-commerce Website" 
              duratinStart="04/2022"  
              duratinEnd="10/2022" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>
            <ProjectCards 
              homePageImg={project1}
              name="Porfolio" 
              duratinStart="10/2022"  
              duratinEnd="05/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
            <ProjectCards 
              homePageImg={project1}
              name="Snake Game" 
              duratinStart="05/2023"  
              duratinEnd="06/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
      </div>
    </TabPanel>
    <TabPanel value={value} index={2}>
    <div className='card-box'>
    <ProjectCards 
              homePageImg='../image/cup-1834296_960_720.jpg'
              name="E-commerce Website" 
              duratinStart="04/2022"  
              duratinEnd="10/2022" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>
            <ProjectCards 
              homePageImg={project1}
              name="Porfolio" 
              duratinStart="10/2022"  
              duratinEnd="05/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
            <ProjectCards 
              homePageImg={project1}
              name="Snake Game" 
              duratinStart="05/2023"  
              duratinEnd="06/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
      </div>
      <div className='card-box'>
      <ProjectCards 
              homePageImg='../image/cup-1834296_960_720.jpg'
              name="E-commerce Website" 
              duratinStart="04/2022"  
              duratinEnd="10/2022" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>
            <ProjectCards 
              homePageImg={project1}
              name="Porfolio" 
              duratinStart="10/2022"  
              duratinEnd="05/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
            <ProjectCards 
              homePageImg={project1}
              name="Snake Game" 
              duratinStart="05/2023"  
              duratinEnd="06/2023" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam totam voluptatum reiciendis ratione facilis. Dolorem sapiente quam, suscipit incidunt similique et voluptate, nulla quaerat laboriosam accusantium id perferendis consequuntur?" 
              Technology_and_skills="php, HTML5, CSS3, BOOTSTRAP3.4, AJAX and LARAVEL etc"
            ></ProjectCards>   
      </div>
    </TabPanel >
    <TabPanel value={value} index={2}>
   4
    </TabPanel>
    </div>

    )
  }
}

export default Projects