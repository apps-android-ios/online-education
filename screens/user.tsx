import { FlatList, StyleSheet, Text, View, Image } from "react-native";

import useUser from "../hooks/use-user";

import { UserListProps } from "../types/global";

function UserList({ item }: { item: UserListProps }) {
  return (
    <View style={styles.userCard}>
      <View style={styles.imageArea}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: item.image,
          }}
        />
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View>
        <View style={styles.bioDataContainer}>
          <Text style={styles.bioData}>Bio-Data</Text>
          <Text style={styles.bioDataId}>
            {item.userId < 10 ? `#0${item.id}` : `#${item.id}`}
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.detailsText}>Name: {item.name}</Text>
          <Text style={styles.detailsText}>Email: {item.email}</Text>
          <Text style={styles.detailsText}>Mobile: {item.mobile}</Text>
        </View>
      </View>
    </View>
  );
}

const User = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading && error) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.mainTitle}>List of Users</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={UserList}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 20,
    paddingLeft: 25,
    marginTop: 20,
    textAlign: "center",
    color: "#333333",
    fontFamily: "Nunito_700Bold",
  },
  userCard: {
    width: 220,
    height: 400,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: "Nunito_600SemiBold",
    marginVertical: 10,
    paddingLeft: 10,
  },
  imageArea: {},
  imgStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  mainContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#355335",
    padding: 10,
    fontFamily: "JosefinSans_400Regular",
  },
  bioData: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
  },
  bioDataId: {
    color: "#fff",
  },
  detailsText: {
    fontFamily: "JosefinSans_400Regular",
  },
});
