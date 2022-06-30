import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const DataSlider = [
    {
        id: "1",
        name: "მესტია",
        price: 200,
        subTitle: "mestia is located in the north of Georgia",
        url: "mestia.png",
        duration: "4 days"
    },
    {
        id: "2",
        name: "ბათუმი",
        price: 150,
        subTitle:"batumi is a seaside city, located in the south-west of Georgia by the Black Sea",
        url: "src/pics/batumi.png",
        duration: "3 days"
    },
    {
        id: "3",
        name: "სიღნაღი",
        subTitle:"Sighnaghi is located in the east of Georgia",
        price: 180,
        url: "../pics/sighnaghi.png",
        alt: "Something Went wrong",
        duration: "1 day"
    },
// "./"
];

export default DataSlider;