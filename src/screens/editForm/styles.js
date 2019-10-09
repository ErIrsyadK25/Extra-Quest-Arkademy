import {StyleSheet} from 'react-native'
import {Dimensions} from 'react-native'

var {width,height}=Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    header: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#f56d91',
        fontSize: 30,
        fontWeight:'bold',
        padding: 20,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 180,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: '#ededed',
        margin: 10
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 12,
        bottom: 10,
        backgroundColor: '#f56d91',
        width: 80,
        height: 60,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 20,
    },
    colorText: {
        fontSize:15,
    },
    colorBox: {
        width:296,
        height:250,
        padding: 40,
        margin: 12,
        backgroundColor: 'grey'
    },
});

export default styles