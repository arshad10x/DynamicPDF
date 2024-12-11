import { useState } from "react";
import {
    PDFViewer,
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    pdf,
} from "@react-pdf/renderer";
import "@fontsource/roboto";

// Define styles for the PDF
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        lineHeight: 1.6,
    },
    header: {
        marginBottom: 20,
    },
    field: {
        marginBottom: 10,
    },
    text: {
        marginBottom: 15,
    },
});

const DynamicPDF = () => {
    // States for dynamic input
    const [name, setName] = useState("Arshad Ahmed");
    const [date, setDate] = useState("10 Dec 2024");
    const [subject, setSubject] = useState("This is a testing report of abc");

    const downloadPDF = async () => {
        const doc = (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.header}>
                        <Text>Report</Text>
                    </View>
                    <View style={styles.field}>
                        <Text>To,</Text>
                        <Text>{name}</Text>
                    </View>
                    <View style={styles.field}>
                        <Text>Date: {date}</Text>
                    </View>
                    <View style={styles.field}>
                        <Text>Subject: {subject}</Text>
                    </View>
                    <View style={styles.text}>
                        <Text>
                            Hi Sir/Maam, Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </View>
                    <View>
                        <Text>Thanks,</Text>
                        <Text>Arsh10x Academy</Text>
                    </View>
                </Page>
            </Document>
        );

        const blob = await pdf(doc).toBlob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "DynamicReport.pdf";
        link.click();
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "20px",
                fontFamily: "Roboto, sans-serif",
            }}
        >
            {/* Input fields for dynamic data */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <div>
                    <label
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "14px",
                            fontWeight: "bold",
                        }}
                    >
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                marginTop: "5px",
                                padding: "10px",
                                fontSize: "14px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "14px",
                            fontWeight: "bold",
                        }}
                    >
                        Date:
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            style={{
                                marginTop: "5px",
                                padding: "10px",
                                fontSize: "14px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "14px",
                            fontWeight: "bold",
                        }}
                    >
                        Subject:
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            style={{
                                marginTop: "5px",
                                padding: "10px",
                                fontSize: "14px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />
                    </label>
                </div>
            </div>

            {/* PDF Viewer */}
            <PDFViewer
                style={{
                    width: "100%",
                    height: "500px",
                    marginTop: "20px",
                    border: "1px solid #ccc",
                }}
            >
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.header}>
                            <Text>Report</Text>
                        </View>
                        <View style={styles.field}>
                            <Text>To,</Text>
                            <Text>{name}</Text>
                        </View>
                        <View style={styles.field}>
                            <Text>Date: {date}</Text>
                        </View>
                        <View style={styles.field}>
                            <Text>Subject: {subject}</Text>
                        </View>
                        <View style={styles.text}>
                            <Text>
                                Hi Sir/Maam, Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </View>
                        <View>
                            <Text>Thanks,</Text>
                            <Text>Broadstairs IT Solutions</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
            <button
                onClick={downloadPDF}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  alignSelf: "center",
                  width:"60%"
                  
                }}
            >
                Download PDF
            </button>
        </div>
    );
};

export default DynamicPDF;
