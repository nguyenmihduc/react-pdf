import './App.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import styled from 'styled-components';

//https://stackoverflow.com/questions/69570562/html2canvas-jspdf-multiple-pages-in-ie

const StyledCapture = styled.ul`
    background-color: thistle;
    position: relative;
    &:after {
        background-color: crimson;
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        top: 832px; // 792 + 40 for margins
        width: 100%;
    }
    &:before {
        background-color: crimson;
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        top: 1664px;
        width: 100%;
    }
`;

const App = () => {
    const pdfRef = useRef();
    const handleDownloadPDF = () => {
        const input = pdfRef.current;

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const pageHeight = 297;

            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            const pdf = new jsPDF('p', 'mm');

            let position = 0;
            pdf.addImage(imgData, 'jpeg', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'jpeg', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save('invoice.pdf');
        });
    };

    // const functionPrint = () => {
    //     const input2 = pdfRef.current;
    //     html2canvas(input2, {
    //         onrendered: function (canvas) {
    //             console.log('>>> 3');
    //             var imgData = canvas.toDataURL('image/png');
    //             var imgWidth = 210;
    //             var pageHeight = 295;
    //             var imgHeight = (canvas.height * imgWidth) / canvas.width;
    //             var heightLeft = imgHeight;
    //             window.jsPDF = window.jspdf.jsPDF;
    //             var doc = new jsPDF('p', 'mm');
    //             var position = 0;

    //             doc.addImage(imgData, 'jpeg', 0, position, imgWidth, imgHeight);
    //             heightLeft -= pageHeight;

    //             while (heightLeft >= 0) {
    //                 position = heightLeft - imgHeight;
    //                 doc.addPage();
    //                 doc.addImage(
    //                     imgData,
    //                     'jpeg',
    //                     0,
    //                     position,
    //                     imgWidth,
    //                     imgHeight,
    //                 );
    //                 heightLeft -= pageHeight;
    //             }
    //             doc.save('file.pdf');
    //         },
    //     });
    // };

    return (
        <>
            <button onClick={handleDownloadPDF}>Print</button>
            <div ref={pdfRef}>
                <StyledCapture>
                    <li>Page 1</li>
                    <li>Page 2</li>
                    <li>Page 3</li>
                    <li>Page 4</li>
                    <li>Page 5</li>
                    <li>Page 6</li>
                    <li>Page 7</li>
                    <li>Page 8</li>
                    <li>Page 9</li>
                    <li>Page 10</li>
                    <li>Page 11</li>
                    <li>Page 12</li>
                    <li>Page 13</li>
                    <li>Page 14</li>
                    <li>Page 15</li>
                    <li>Page 16</li>
                    <li>Page 17</li>
                    <li>Page 18</li>
                    <li>Page 19</li>
                    <li>Page 20</li>
                    <li>Page 21</li>
                    <li>Page 22</li>
                    <li>Page 23</li>
                    <li>Page 24</li>
                    <li>Page 25</li>
                    <li>Page 26</li>
                    <li>Page 27</li>
                    <li>Page 28</li>
                    <li>Page 29</li>
                    <li>Page 30</li>
                    <li>Page 31</li>
                    <li>Page 32</li>
                    <li>Page 33</li>
                    <li>Page 34</li>
                    <li>Page 35</li>
                    <li>Page 36</li>
                    <li>Page 37</li>
                    <li>Page 38</li>
                    <li>Page 39</li>
                    <li style={{ fontSize: '3rem' }}>heythere</li>
                    <li>Page 40</li>
                    <li>Page 41</li>
                    <li>Page 42</li>
                    <li>Page 43</li>
                    <li>Page 44</li>
                    <li>Page 45</li>
                    <li>Page 46</li>
                    <li>Page 47</li>
                    <li>Page 48</li>
                    <li style={{ fontSize: '2rem' }}>waz</li>
                    <li>Page 49</li>
                    <li>Page 50</li>
                    <li>Page 51</li>
                    <li>Page 52</li>
                    <li>Page 53</li>
                    <li>Page 54</li>
                    <li>Page 55</li>
                    <li>Page 56</li>
                    <li>Page 57</li>
                    <li>Page 58</li>
                    <li>Page 59</li>
                    <li>Page 60</li>
                    <li>Page 61</li>
                    <li>Page 62</li>
                    <li style={{ fontSize: '1.5rem' }}>billy</li>
                    <li>Page 63</li>
                    <li>Page 64</li>
                    <li>Page 65</li>
                    <li>Page 66</li>
                    <li>Page 67</li>
                    <li>Page 68</li>
                    <li>Page 69</li>
                    <li>Page 70</li>
                    <li>Page 71</li>
                    <li>Page 72</li>
                    <li>Page 73</li>
                    <li>Page 74</li>
                    <li>Page 75</li>
                    <li>Page 76</li>
                    <li>Page 77</li>
                    <li>Page 78</li>
                    <li>Page 79</li>
                    <li>Page 80</li>
                    <li style={{ fontSize: '4rem' }}>anna</li>
                    <li>Page 81</li>
                    <li>Page 82</li>
                    <li>Page 83</li>
                    <li>Page 84</li>
                    <li>Page 85</li>
                    <li>Page 86</li>
                    <li>Page 87</li>
                    <li>Page 88</li>
                    <li>Page 89</li>
                    <li>Page 90</li>
                    <li>Page 91</li>
                    <li>Page 92</li>
                    <li>Page 93</li>
                    <li>Page 94</li>
                    <li>Page 95</li>
                    <li>Page 96</li>
                    <li>Page 97</li>
                    <li style={{ fontSize: '3.5rem' }}>carlos</li>
                    <li>Page 98</li>
                    <li>Page 99</li>
                    <li>Page 100</li>
                    <li>Page 101</li>
                    <li>Page 102</li>
                    <li>Page 103</li>
                    <li>Page 104</li>
                    <li>Page 105</li>
                    <li>Page 106</li>
                    <li>Page 107</li>
                    <li>Page 108</li>
                    <li>Page 109</li>
                    <li>Page 110</li>
                    <li>Page 111</li>
                    <li>Page 112</li>
                    <li>Page 113</li>
                    <li>Page 114</li>
                    <li>Page 115</li>
                    <li>Page 116</li>
                    <li>Page 117</li>
                    <li>Page 118</li>
                    <li>Page 119</li>
                    <li>Page 120</li>
                    <li>Page 121</li>
                    <li>Page 122</li>
                    <li>Page 123</li>
                    <li>Page 124</li>
                    <li>Page 125</li>
                    <li>Page 126</li>
                    <li>Page 127</li>
                    <li>Page 128</li>
                    <li>Page 129</li>
                </StyledCapture>
            </div>
        </>
    );
};

export default App;
