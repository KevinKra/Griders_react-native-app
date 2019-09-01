Goals:

- hooks && reducer controlled state -> userReducer
- YELL_CASE for important constants
- opacityPress button
- MVC architecture
- switch statements
- autoCapitalize="none" and autoCorrect={false}
- axios + extract api business logic
- api axios files
- async error handling
- useEffect || useEffect(() => {}, [])
- navigation via props || withNavigation() -- react-navigation

```
if (!result) return null;

    return (
      <View>
        <Text>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => {
            <Image source={{ uri: item }} />;
          }}
        />
      </View>
    );
```
