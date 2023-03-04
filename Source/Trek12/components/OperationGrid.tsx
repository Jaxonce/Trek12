import * as React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

// Styles
const styles = {
    image: {
        flex: 1,
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        justifySelf: 'flex-start',
        
    },
    app: {
        flex: 4, // the number of columns you want to devide the screen into
        width: 120,
        position: 'relative',
        top: 23,
        right: 26,
        
        transform: [{rotate : "-2.5deg"}]
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
    
    "2col": {
        backgroundColor: "transparent",
        flex: 2,
        width: 30,
        height: 30,
        borderColor: "black",
    },
    
    "4col": {
        flex: 4
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: 'Sketch',
    },
    xmark: {
        width: 20,
        height: 20,
        
        alignSelf: "center",
        justifySelf: "center",
    }
};

// RN Code
const Col = ({ numRows, children }) => {
    return (
        <View style={styles[`${numRows}col`]}>{children}</View>
    )
}

const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
)

export function OperationGrid() {
    const xmark = "x";
    return (
        <ImageBackground style={styles.image} source={require("../assets/grille_operation.png")}>
            <View style={styles.app}>
                <Row>
                    <Col numRows={2}>
                       <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}></Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}></Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        <Text style={styles.text}></Text>
                    </Col>
                </Row>
            </View>
        </ImageBackground>

    )
}

