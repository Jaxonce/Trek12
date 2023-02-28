import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';

// Styles
const styles = {
    image: {
        flex: 1,
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    app: {
        flex: 4, // the number of columns you want to devide the screen into
        width: 120,
        position: 'absolute',
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
        borderColor: "#fff",
        borderWidth: 1,
        flex: 2,
        width: 30,
        height: 30,

    },
    
    "4col": {
        flex: 4
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
    return (
        <ImageBackground style={styles.image} source={require("../assets/grille_operation.png")}>
            <View style={styles.app}>
                <Row>
                    <Col numRows={2}>
                       <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                </Row>
                <Row>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                    <Col numRows={2}>
                        <Text></Text>
                    </Col>
                </Row>
            </View>
        </ImageBackground>

    )
}

