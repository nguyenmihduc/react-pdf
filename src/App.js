import './App.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import Table from 'react-bootstrap/Table';

const App = () => {
    const pdfRef = useRef();

    const handleDownloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(
                imgData,
                'PNG',
                imgX,
                imgY,
                imgWidth * ratio,
                imgHeight * ratio,
            );
            pdf.save('invoice.pdf');
        });
    };
    const exportPDF = () => {
        return;
    };
    return (
        <>
            <div
                ref={pdfRef}
                style={{
                    background: 'grey',
                    marginTop: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <button onClick={handleDownloadPDF}>Export PDF</button>
        </>
    );
};

export default App;
