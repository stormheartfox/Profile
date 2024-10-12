import React from "react";
import {Grid2 as Grid, Box} from "@mui/material"
import SkillsCard from "../SkillsCard/SkillsCard";


const SkillsContainer = () => {
  const skillsArray = [
    ["#", "Text about python", "Some alt text"],
    ["#", "Text about react", "some alt text"],
    ["#", "Text about godot", "some alt text"],
    ["#", "Text about css", "some alt text"],
    ["#", "Text about html", "some alt text"],
    ["#", "Text about JS", "some alt text"]
  ];
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {skillsArray.map((skillData, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <SkillsCard cardImage={skillData[0]} cardText={skillData[1]} altText={skillData[2]} />
            </Grid>
          ))}
        </Grid>
      </Box>

  );
}

export default SkillsContainer