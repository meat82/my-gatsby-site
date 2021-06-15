import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 1000,
  },
});

export default function AboutMe() {
  const classes = useStyles();
  console.log("AboutMe: ")
  console.log(classes)

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h2" gutterBottom>
        Mikko Torvinen
      </Typography>
      <Typography paragraph>
      Hi! Nice to see you at my profile. Here’s short introduction about computer nerd called Mikko Torvinen
      </Typography>
      <Typography paragraph>
      As said my name is Mikko Torvinen. I started my career with computers when I was in high school by doing some simple programming using Visual Basic and creating web pages with HTML. I have always been interested of computers and possibilities computers can bring our everyday life
I continued my studies in Kemi-Tornio University of Applied Science with digital technology as major. Studies were included with design and implement embedded devices as well as designing digital filters. As minors studies I had courses in software development and working in software projects.
      </Typography>
      <Typography paragraph>
      My working career started on Nokia back in 2006. I was participating on software development organization responsible of audio adaption software in Symbian based mobile phones. My key responsibilities were develop automatic testing and building environments around mobile phones. Our main challenges were integrate several software sources into one reliability build automatically.
      </Typography>
      <Typography paragraph>
      Thou that I have always been interested of web applications and programming using web tools I joined Technia PLM Oy in year 2011. In Technia I worked as web application developer in area of Product Lifecycle Management. I was working on both front-end and back-end activities using tools such as Java, JavaScript, jQuery, Struts and Spring. In Technia our PLM environment was Enovia provided by Dassault Systemes.
      </Typography>
      <Typography paragraph>
      After good and educated years in Technia I had possibility to join another PLM company in Finland called IDEAL PLM. Compared to Technia IDEAL PLM is using Siemens PLM tools Teamcenter. Now I’m using my previous competence to strengthen IDEAL PLM marketing in area of Northern Finland as well as learning new ways to handle PLM.
      </Typography> 
    </div>
  );
}