import * as React from 'react';
import { View, Text, ImageBackground, Image, Dimensions, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view';

// Styles
const styles = {
    image: {
        // transform: [{ translateX: 0 }, { translateY: 0 }],
        flex: 0,
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },

    "2col": {
        backgroundColor: "transparent",
        flex: 1,
        width: 'auto',
        borderColor: "black",
        margin: 0,
    },
    "3col": {
        backgroundColor: "transparent",
        flex: 1,
        width: 'auto',
        borderColor: "black",
        borderWidth: 1,
        margin: 0,
    },
    text: {
        fontSize: 35,
        fontWeight: "bold",
        fontFamily: 'Sketch',
    },
    xmark: {
        width: 15,
        height: 15,

    },
    app2: {
        flex: 0, // the number of columns you want to devide the screen into
        height: 40,
        position: 'relative',
        top: '67%',
        left: '7%',
    },
    app: {
        flex: 0, // the number of columns you want to devide the screen into
        height: 40,
        position: 'relative',
        top: '59%',
        left: '7%',
    },
    bestChaine: {
        flex: 0, // the number of columns you want to devide the screen into
        height: '13%',
        position: 'relative',
        top: '32%',
        left: '49%',
        width: '13%',
    },
    bestZone: {
        flex: 0, // the number of columns you want to devide the screen into
        height: '13%',
        position: 'relative',
        top: '41%',
        left: '48.5%',
        width: '13%',
    },
    bestZoneResult: {
        flex: 0, // the number of columns you want to devide the screen into
        height: '13%',
        position: 'relative',
        top: '15%',
        left: '57.5%',
    },
    bestChaineResult: {
        flex: 0, // the number of columns you want to devide the screen into
        height: '13%',
        position: 'relative',
        top: '7%',
        left: '57.5%',
    },
    malusZone: {
        flex: 0, // the number of columns you want to devide the screen into
        height: '13%',
        position: 'relative',
        bottom: '8%',
        left: '74.5%',
        width: '13%',
    },
    totalResult: {
        flex: 0, // the number of columns you want to devide the screen into
        height: 100,
        position: 'relative',
        bottom: '30%',
        left: '84.8%',
        width: 100,
    },
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

export default function EndOperation() {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {/* @ts-ignore */}
                <ImageBackground style={[styles.image, { width: screenWidth, height: screenHeight*0.8, position:'absolute', top: screenHeight*0.2 }]} source={require("../assets/grilleCalculPoint.png")}>
                    {/* @ts-ignore */}
                    <View style={[styles.app, { width: styles.app.height * 8 }]}>
                        <Row>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}

                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>

                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                        </Row>
                    </View>

                    {/* @ts-ignore */}
                    <View style={[styles.app2, { width: styles.app.height * 8 }]}>
                        <Row>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput inputMode="tel" style={styles.text} maxLength={Platform.OS === "ios" ? "2" : null}/>
                            </Col>
                        </Row>
                    </View>

                    {/* @ts-ignore */}
                    <View style={[styles.bestChaine, { width: styles.app.height }]}>
                        <Row>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength={Platform.OS === "ios" ? "2" : null} style={styles.text} />
                            </Col>
                        </Row>
                    </View>

                    {/* @ts-ignore */}
                    <View style={[styles.bestZone, { width: styles.app.height }]}>
                        <Row>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength={Platform.OS === "ios" ? "2" : null} style={styles.text} />
                            </Col>
                        </Row>
                    </View>
                    {/* @ts-ignore */}
                    <View style={[styles.bestChaineResult, { width: styles.app.height * 1.25 }]}>
                        <Row>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength={Platform.OS === "ios" ? "2" : null} style={styles.text} />
                            </Col>
                        </Row>
                    </View>
                    {/* @ts-ignore */}
                    <View style={[styles.bestZoneResult, { width: styles.app.height * 1.25 }]}>
                        <Row>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength={Platform.OS === "ios" ? "2" : null} style={styles.text} />
                            </Col>
                        </Row>
                    </View>
                    {/* @ts-ignore */}
                    <View style={[styles.malusZone, { width: styles.app.height * 1.25 }]}>
                        <Row>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength={Platform.OS === "ios" ? "2" : null} style={styles.text} />
                            </Col>
                        </Row>
                    </View>
                    {/* @ts-ignore */}
                    <View style={[styles.totalResult]}>
                        <Row>
                            <Col numRows={2}>
                                {/* @ts-ignore */}
                                <TextInput keyboardType={'number-pad'} onPressOut={() => Keyboard.dismiss()} maxLength={Platform.OS === "ios" ? "3" : null} style={[styles.text, { fontSize: 60, textAlign: 'center', textAlignVertical: 'center' }]} />
                            </Col>
                        </Row>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

