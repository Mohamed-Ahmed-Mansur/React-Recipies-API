import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  List,
  ListItem,
  Link,
  useColorModeValue,
  Checkbox,
  Divider,
} from '@chakra-ui/react';

const Details = () => {
  const state = useSelector((st) => st.getrecpie.getrecpie);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const toggleIngredient = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ingredient)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  console.log(state);

  return (
    <>
      <Box bg="white" p={9} borderRadius="lg" overflow="hidden">
        <Box>
          <Text fontSize="xl" color="green">
            Home Recipe
          </Text>

          {state.map((u, index) => (
            <div key={index} className="container m-2">
              <Text fontSize="xl">
                Category: {u.strCategory}
                <br />
                Area: {u.strArea}
              </Text>
              {/* <Text fontSize="sm" color="gray.500">
                Author: nomeeb | 26. 2003 | 22 comments | 9 Saves
              </Text> */}

              <Box display="flex" flexDirection="row" alignItems="center">
                <img
                  src={u.strMealThumb}
                  alt="recipe"
                  style={{ marginRight: '20px' }}
                />
                <VStack align="flex-start">
                  <Heading size="md" mt={3}>
                    <div>
                      <h2>Ingredients:</h2>
                      <List spacing={2}>
                        {[
                          u.strIngredient1,
                          u.strIngredient2,
                          u.strIngredient3,
                          u.strIngredient4,
                          u.strIngredient5,
                          u.strIngredient6,
                          u.strIngredient7,
                          u.strIngredient8,
                        ].map(
                          (ingredient, idx) =>
                            ingredient && ( // Check if the ingredient exists
                              <ListItem key={idx}>
                                <Checkbox
                                  isChecked={selectedIngredients.includes(
                                    ingredient
                                  )}
                                  onChange={() => toggleIngredient(ingredient)}
                                  colorScheme={
                                    selectedIngredients.includes(ingredient)
                                      ? 'green'
                                      : 'black'
                                  }
                                >
                                  <Text
                                    fontWeight={
                                      selectedIngredients.includes(ingredient)
                                        ? 'bold'
                                        : 'normal'
                                    }
                                  >
                                    {ingredient}
                                  </Text>
                                </Checkbox>
                              </ListItem>
                            )
                        )}
                      </List>
                    </div>
                  </Heading>
                </VStack>
              </Box>

              <h3 className="mt-4"> Instructions:</h3>
              <p>{u.strInstructions}</p>

              {/* <HStack>
                <Text
                  fontWeight={
                    selectedIngredients.includes('Prep Time')
                      ? 'bold'
                      : 'normal'
                  }
                >
                  Prep Time
                </Text>
                <Divider orientation="vertical" borderColor="black" />
                <Text
                  fontWeight={
                    selectedIngredients.includes('Cook Time')
                      ? 'bold'
                      : 'normal'
                  }
                >
                  Cook Time
                </Text>
                <Divider orientation="vertical" borderColor="black" />
                <Text
                  fontWeight={
                    selectedIngredients.includes('Serving') ? 'bold' : 'normal'
                  }
                >
                  Serving
                </Text>
              </HStack> */}

              {/* <HStack>
                <Text
                  fontWeight="bold"
                  color={
                    selectedIngredients.includes('Prep Time')
                      ? 'green'
                      : 'black'
                  }
                >
                  5 mins
                </Text>
                <Divider orientation="vertical" borderColor="black" />
                <Text
                  fontWeight="bold"
                  color={
                    selectedIngredients.includes('Cook Time')
                      ? 'green'
                      : 'black'
                  }
                >
                  5 mins
                </Text>
                <Divider orientation="vertical" borderColor="black" />
                <Text
                  fontWeight="bold"
                  color={
                    selectedIngredients.includes('Serving') ? 'green' : 'black'
                  }
                >
                  4 Serving
                </Text>
              </HStack> */}

              <Divider />
              <div></div>
              <YouTube videoId={u.strYoutube.split('=')[1]} />
              <h4>
                sourceRecipe: <Link href={u.strSource}>{u.strSource}</Link>
              </h4>
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Details;
