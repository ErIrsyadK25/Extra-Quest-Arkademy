import {StyleSheet} from 'react-native'
import {Dimensions} from 'react-native'

var {width,height}=Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection:'row',
        backgroundColor: '#f56d91',
        paddingHorizontal: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#ddd',
        elevation:3
    },
    headerPicker: {
        width:'95%',
    },
    headerText: {
        color: 'white',
        fontSize: 30,
    },
    scrollContainer: {
        flex: 5,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 140,
        bottom: 20,
        backgroundColor: '#f56d91',
        width: 80,
        height: 60,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 40,
    },
    note: {
        flexDirection:'row',
        alignItems:'center',
        padding: 10,
        paddingRight: 100,
        borderLeftWidth:10,
        borderLeftColor:'orange',
        borderBottomWidth: 5,
        borderBottomColor: '#ededed',
    },
    noteClear: {
        backgroundColor:'#fdfdfd',
        flexDirection:'row',
        alignItems:'center',
        padding: 10,
        paddingRight: 100,
        borderLeftWidth:10,
        borderLeftColor:'orange',
        borderBottomWidth: 5,
        borderBottomColor: '#ededed',
    },
    noteSeparate: {
        margin:10, 
        fontSize:20, 
        fontWeight:'bold', 
        color:'black'
    },
    noteCategory: {
        fontFamily:'Roboto',
        fontSize:15, 
        marginTop:3, 
        width:200
    },
    noteCategoryClear: {
        width:200,
        fontSize:15, 
        marginBottom:3, 
        textDecorationLine:'line-through'
    },
    noteText: {
        fontFamily:'sans-serif-medium',
        fontSize:20,
        color:'black',
        width:200
    },
    noteTextClear: {
        fontSize:20,
        color:'black',
        width:200,
        textDecorationLine:'line-through'
    },
    noteBox: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        right:10
    },
    noteUndone: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f56d91',
        padding: 5,
        marginRight:20,
        marginLeft:10,
        borderRadius:50
    },
    noteDone: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f56d91',
        padding: 5,
        marginRight:20,
        marginLeft:10,
        borderRadius:50
    },
    noteEdit: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft:10,
        borderRadius:10
    },
    noteDelete: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft:10,
        borderRadius:10
    },
    noteDeleteText: {
        color: 'white',
        fontSize:18
    }
});

export default styles