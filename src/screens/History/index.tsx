import { useNavigation } from '@react-navigation/native';
import { HouseLine, Trash } from 'phosphor-react-native';
import { useEffect, useRef, useState } from 'react';
import { Alert, Pressable, ScrollView, View } from 'react-native';
import Animated, { Layout, SlideInRight, SlideOutRight } from 'react-native-reanimated';
import { Header } from '../../components/Header';
import { HistoryCard, HistoryProps } from '../../components/HistoryCard';

import { Swipeable } from 'react-native-gesture-handler';
import { Loading } from '../../components/Loading';
import { historyGetAll, historyRemove } from '../../storage/quizHistoryStorage';
import { THEME } from '../../styles/theme';
import { styles } from './styles';

export function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [history, setHistory] = useState<HistoryProps[]>([]);

  const { goBack } = useNavigation();
  const swipeableRef = useRef<Swipeable[]>([]);

  async function fetchHistory() {
    const response = await historyGetAll();
    setHistory(response);
    setIsLoading(false);
  }

  async function remove(id: string) {
    await historyRemove(id);

    fetchHistory();
  }

  function handleRemove(id: string, index: number) {
    swipeableRef.current?.[index].close();
    Alert.alert(
      'Remove',
      'Do you want to remove this record?',
      [
        {
          text: 'Yes', onPress: () => remove(id)
        },
        { text: 'No', style: 'cancel' }
      ]
    );

  }

  useEffect(() => {
    fetchHistory();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Header
        title="History"
        subtitle={`Your history of studies${'\n'}completed`}
        icon={HouseLine}
        onPress={goBack}
      />

      <ScrollView
        contentContainerStyle={styles.history}
        showsVerticalScrollIndicator={false}
      >
        {
          history.map((item, index) => (
            <Animated.View
              key={item.id}
              entering={SlideInRight}
              exiting={SlideOutRight}
              layout={Layout.springify()}
              >
                <Swipeable
                 ref={(ref) => {
                  if(ref) {
                    swipeableRef.current.push(ref)
                  }
                }}
                overshootLeft={false}
                containerStyle={styles.swipeableContainer}
                renderLeftActions={() => (
                  <Pressable 
                    style={styles.swipeableRemove}
                    onPress={() => handleRemove(item.id, index)}
                  >
                    <Trash 
                      size={32} 
                      color={THEME.COLORS.GREY_100} 
                    /> 
                  </Pressable>
                )}
              >
              <HistoryCard data={item} />
                </Swipeable>
            </Animated.View>
          ))
        }
      </ScrollView>
    </View>
  );
}