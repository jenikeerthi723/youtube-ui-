import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class videoItem extends Component {
    render() {
        let video = this.props.video;
        //   alert(video.id);
        return (
            <View style={styles.container}>
                <Image source={{ uri: video.snippet.thumbnails.medium.url }} style={{ height: 200 }} />
                <View style={styles.descContainer}>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1j6MfwSzwwrqFToM2r0sQBs4apw6hwcqitQ&usqp=CAU' }} style={{ height: 50, width: 50, borderRadius: 25 }} />

                    <View style={styles.videoDetails}>
                        <Text numberOfLines={2} style={styles.videoTitle}>{video.snippet.title}</Text>
                        <Text style={styles.videoStatus}>{video.snippet.channelTitle + "·" + nFormatter(video.statistics.viewCount, 1) + ". 3 months ago "}

                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="more-vert" size={20} color="#999999" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
function nFormatter(num, digits) {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + ' views';
}
const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    descContainer: {
        flexDirection: "row",
        paddingTop: 15,

    },
    videoTitle: {
        fontSize: 16,
        color: "#3c3c3c"
    },
    videoDetails: {
        paddingHorizontal: 20,
        flex: 1
    },
    videoStatus: {
        fontSize: 16,
        paddingTop: 3
    }
})

