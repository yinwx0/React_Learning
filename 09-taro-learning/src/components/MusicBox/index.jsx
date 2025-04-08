import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { AtList, AtListItem, AtFloatLayout, AtIcon, AtSlider } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

/**
 * MusicBox组件 - 音乐播放器
 * 实现了音频播放、暂停、进度控制、音量调节等功能
 * 使用网易云音乐API获取音频资源
 */
const MusicBox = () => {
  // 状态管理
  const [currentSong, setCurrentSong] = useState(null); // 当前播放的歌曲
  const [isPlaying, setIsPlaying] = useState(false); // 播放状态
  const [audioContext, setAudioContext] = useState(null); // 音频上下文
  const [progress, setProgress] = useState(0); // 播放进度（0-100）
  const [volume, setVolume] = useState(1); // 音量（0-1）
  const [isLoading, setIsLoading] = useState(false); // 加载状态
  const [error, setError] = useState(null); // 错误信息
  const [playlist, setPlaylist] = useState([
    // 播放列表
    { id: "2057534370", title: "笼", artist: "张碧晨", duration: "4:15" },
    { id: "1401226842", title: "恋爱告急", artist: "鞠婧祎", duration: "3:30" },
    { id: "28949444", title: "喜欢你", artist: "邓紫棋", duration: "4:00" },
  ]);

  // 初始化音频上下文并设置事件监听
  useEffect(() => {
    const audio = Taro.createInnerAudioContext();
    audio.onTimeUpdate(() => {
      if (audio.duration > 0) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    });
    audio.onEnded(() => {
      setIsPlaying(false);
      setProgress(0);
    });
    audio.onError((res) => {
      console.error("音频播放错误:", res.errMsg);
      Taro.showToast({
        title: "音频播放失败",
        icon: "none",
      });
    });
    setAudioContext(audio);

    return () => {
      audio.destroy();
    };
  }, []);

  /**
   * 处理歌曲播放
   * @param {Object} song - 要播放的歌曲对象
   * @returns {Promise<void>}
   */
  const handlePlaySong = async (song) => {
    if (audioContext) {
      try {
        setError(null);
        setIsLoading(true);
        const audioUrl = `https://music.163.com/song/media/outer/url?id=${song.id}.mp3`;
        audioContext.src = audioUrl;
        audioContext.volume = volume;

        // 等待音频加载完成
        await new Promise((resolve, reject) => {
          const onCanplay = () => {
            audioContext.offCanplay(onCanplay);
            resolve();
          };
          const onError = (res) => {
            audioContext.offError(onError);
            reject(res);
          };
          audioContext.onCanplay(onCanplay);
          audioContext.onError(onError);
        });

        try {
          await audioContext.play();
        } catch (playError) {
          console.error("播放失败:", playError);
          throw new Error("播放失败，请检查网络连接");
        }
        setCurrentSong(song);
        setIsPlaying(true);
      } catch (err) {
        console.error("音频播放错误:", err);
        setError("无法播放该音频，请稍后重试");
        setIsPlaying(false);
        setCurrentSong(null);
      } finally {
        setIsLoading(false);
      }
    }
  };

  /**
   * 切换播放/暂停状态
   */
  const togglePlay = () => {
    if (audioContext && currentSong) {
      if (isPlaying) {
        audioContext.pause();
      } else {
        audioContext.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  /**
   * 处理音量变化
   * @param {number} value - 新的音量值（0-100）
   */
  const handleVolumeChange = (value) => {
    if (audioContext) {
      const newVolume = value / 100;
      audioContext.volume = newVolume;
      setVolume(newVolume);
    }
  };

  /**
   * 处理进度条变化
   * @param {number} value - 新的进度值（0-100）
   */
  const handleProgressChange = (value) => {
    if (audioContext && audioContext.duration) {
      const newTime = (value / 100) * audioContext.duration;
      audioContext.seek(newTime);
      setProgress(value);
    }
  };

  return (
    <View className="music-box">
      <View className="player">
        {currentSong ? (
          <View className="now-playing">
            <Text className="song-title">{currentSong.title}</Text>
            <Text className="artist">{currentSong.artist}</Text>
            <View className="controls">
              <AtIcon
                value={isPlaying ? "pause" : "play"}
                size="30"
                onClick={togglePlay}
              />
              <View className="progress-bar">
                <AtSlider
                  value={progress}
                  step={1}
                  min={0}
                  max={100}
                  onChange={handleProgressChange}
                />
              </View>
              <View className="volume-control">
                <AtIcon value="volume-off" size="20" />
                <AtSlider
                  value={volume * 100}
                  step={1}
                  min={0}
                  max={100}
                  onChange={handleVolumeChange}
                />
                <AtIcon value="volume-plus" size="20" />
              </View>
            </View>
          </View>
        ) : (
          <View className="no-song">
            {isLoading ? (
              <Text>正在加载音频...</Text>
            ) : error ? (
              <Text className="error-message">{error}</Text>
            ) : (
              <Text>选择一首歌曲开始播放</Text>
            )}
          </View>
        )}
      </View>

      <View className="playlist">
        <Text className="section-title">播放列表</Text>
        <AtList>
          {playlist.map((song) => (
            <AtListItem
              key={song.id}
              title={song.title}
              note={song.artist}
              extraText={song.duration}
              onClick={() => handlePlaySong(song)}
              iconInfo={{
                size: 20,
                color: currentSong?.id === song.id ? "#6190E8" : "#78A4FA",
                value: currentSong?.id === song.id ? "volume-plus" : "play",
              }}
            />
          ))}
        </AtList>
      </View>
    </View>
  );
};

export default MusicBox;
