import * as React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

// Styles
const styles = {
    image: {
        flex: 1,
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        justifySelf: 'flex-start',
        position: 'absolute',
        right: "10%",
        top: 0,
        
    },
    app: {
        flex: 1, // the number of columns you want to devide the screen into
        width: 90,
        height: 110,
        position: 'absolute',
        padding: 0,
        top: 19,
        right: 19,
        
        transform: [{rotate : "-2.5deg"}]
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
    
    "2col": {
        backgroundColor: "transparent",
        flex: 2,
        width: 'auto',
        height: 'auto',
        borderColor: "black",
        padding: 5,
        margin: 0,
    },
    
    "4col": {
        flex: 4
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: 'Sketch',
    },
    xmark: {
        width: 15,
        height: 15,
        
    }
};

// RN Code
const Col = ({ numRows, children }) => {
    return (
        <View style={styles[`${numRows}col`]}>{children}</View>
    )
}

const Row = ({ children }) => (
    // @ts-ignore
    <View style={styles.row}>{children}</View>
)

export function OperationGrid() {
    const xmark = "x";
    return (
        // @ts-ignore
        <ImageBackground style={styles.image} source={require("../assets/grille_operation.png")}>
            {/* @ts-ignore */}
            <View style={styles.app}>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                       <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}>{xmark}</Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                    <Col numRows={2}>
                        {/* @ts-ignore */}
                        <Text style={styles.text}></Text>
                    </Col>
                </Row>
            </View>
        </ImageBackground>

    )
}

