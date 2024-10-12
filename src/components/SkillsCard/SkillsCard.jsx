import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material/';

const StyledCard = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
const SkillsCard = (props) => {
    const {cardText, cardImage, altText} = props
    const [flipped, setFlipped] = useState(false)
    const handleClick = () => {
        setFlipped(!flipped)
    }
    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
           <StyledCard style={{height: '220px'}}onClick={handleClick}>
                <img
                    src={cardImage
                     } 
                    alt={altText}
                  style={{height: '220px', width: '200px'}}
                />
              </StyledCard>
              <StyledCard style={{height: '220px'}} onClick={handleClick}>
                  <p
                  >{cardText}</p>
              </StyledCard>
        </ReactCardFlip>
      )
}

export default SkillsCard;