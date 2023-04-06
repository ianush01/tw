import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
    const cardurileMele = [
        {
            title: 'Card Title 1',
            description: 'This is the description for card 1',
            imageUrl: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg',
        },
        {
            title: 'Card Title 2',
            description: 'This is the description for card 2',
            imageUrl: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
        },
        {
            title: 'Card Title 3',
            description: 'This is the description for card 3',
            imageUrl: 'https://i.pinimg.com/originals/be/33/76/be3376b0f835a1766cb7a95003ea4a7d.jpg',
        },
    ];

    return (
        <>
            {
                cardurileMele.map((card, index) => (
                <Card sx={{ maxWidth: 700 }} key={index}>
                    <CardActionArea>
                        <CardMedia component="img" height="140" image={card.imageUrl} alt={card.title} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </>
    );
}
