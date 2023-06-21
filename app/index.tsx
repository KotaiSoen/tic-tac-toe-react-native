import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useEffect, useState } from "react";

function CloseIcon() {
  return <Icon name="close" size={100} color="red"></Icon>;
}

function CircleIcon() {
  return <Icon name="circle-outline" size={85} color="green"></Icon>;
}

export default function Home() {
  const [numberArray, setNumberArray] = useState(
    Array(9)
      .fill({ clicked: false, character: "" })
      .map(() => ({ clicked: false, character: "" }))
  );
  const [player, setPlayer] = useState<boolean>(true);

  const played = (index: number) => {
    setNumberArray((prev) => {
      const updatedArray = [...prev];
      updatedArray[index] = {
        ...updatedArray[index],
        clicked: true,
        character: player ? "x" : "o",
      };
      return updatedArray;
    });
    setPlayer((prev) => !prev);
    checkWinner();
    checkDraw();
  };

  function Box({ index }: { index: number }) {
    return (
      <Pressable onPress={() => played(index)}>
        <View className="border h-24 w-24 flex justify-center items-center">
          {numberArray[index].clicked === true &&
            numberArray[index].character === "x" && <CloseIcon />}
          {numberArray[index].clicked === true &&
            numberArray[index].character === "o" && <CircleIcon />}
        </View>
      </Pressable>
    );
  }

  const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        numberArray[a].clicked &&
        numberArray[a].character === numberArray[b].character &&
        numberArray[b].character === numberArray[c].character
      ) {
        const winner =
          numberArray[a].character === "x" ? "Player 1" : "Player 2";
        alert(`${winner} is the winner`);
        resetGame();
        break; // Exit the loop after finding a winner
      }
    }
  }

  const checkDraw = () => {
    if (numberArray.every((box) => box.clicked)) {
      alert("It's a draw!");
      resetGame();
    }
  }

  const resetGame = () => {
    setNumberArray(
      Array(9)
        .fill({ clicked: false, character: "" })
        .map(() => ({ clicked: false, character: "" }))
    );
    setPlayer(true); // Reset player to initial state if needed
  };

  

  useEffect(() => {
    
  }, [numberArray]);

  return (
    <View className="bg-white h-full flex justify-center items-center">
      <View className="flex-row">
        <Box index={0} />
        <Box index={1} />
        <Box index={2} />
      </View>
      <View className="flex-row">
        <Box index={3} />
        <Box index={4} />
        <Box index={5} />
      </View>
      <View className="flex-row">
        <Box index={6} />
        <Box index={7} />
        <Box index={8} />
      </View>
    </View>
  );
}
