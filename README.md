# Data Visualization Final Project

## Data

The data I used for my final project is [top 50 songs in the US from 2010 to 2019](https://gist.github.com/bbbbrianna/e74082354cbdfe18d42c7b66ecdefa76). This dataset includes the most popular songs played in the US in 2010-2019, which was originally from Spotify, each attribute's meaning can be retrieved from [Spotify for Developers](https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/).


For a more detail, the abbreviation and the meaning is below
| Abbreviation | Meaning |
| ------ | ------ |
| bpm | Tempo |
| nrgy | Energy |
| dnce | Dancibility |
| dB | Loudness |
| live | Liveness |
| dur | Length |
| acous | Acousticness |
| spch | Speechiness |
| pop | Popularity |


## Questions & Tasks

The following tasks and questions drives the visualization and interaction decisions for this project:

 * How does people's taste of music change since 2010?
 * Is there a trend of music can be evaluated by their factors?
 * Which artists are becoming more or less popular? In which year they are the most popular? Can we come up some statistics to quantify the popularity?
 * Is there any correlation of the features of music signature?

## Visulizations
### Yearly Top Genre and Artist Trend [(link)](https://vizhub.com/bbbbrianna/f808d3c0f04043afb59628dfcc5dba1b?edit=files)
- In the proposal, this part was designed to be visualized by stacked bar chart or pie chart. But in the finial project, I used the scatter plot of the top 20 songs in each year to show the trend of the most popular songs with regard to the top genres and artists. Each specific color group can be hovered to get highlighted, and if you place your mouth over a data point of interest, it shows the title, artist and top genre of that song. 

- For expamle, in 2018, people are having a special preference to dance pop, while Popularity is positively correlating with Dancibility(how fitting a song is for dancing).

![image](https://user-images.githubusercontent.com/42927474/98183649-9e252080-1ed6-11eb-92ab-0056862b4920.png)
- In 2010, Lady Gaga was so successful that she had 3 songs in the top 20 Billboard, and Valence(how musically positive a song is) has th positive relationship with Energy(a song's intensity and activity)
![image](https://user-images.githubusercontent.com/42927474/98184385-45568780-1ed8-11eb-8a58-aa7f2fd9c2a3.png)

### Signature Change of the Hit Songs [(link)](https://vizhub.com/bbbbrianna/65606193ae7241e0934c568683894586)
- As what expected in the proposal, in this visualization, I used the line chart to show the trend of music signature in the past 10 years. The data was calucalted by Rstudio, integrating the features of hit songs(10 most popular) every year. To fairly present the statistics, I computed both the average and standard deviation of the hits in each year, and use the dot size to show the level of SD.

![image](https://user-images.githubusercontent.com/42927474/98186389-a2543c80-1edc-11eb-9680-809cf44d3188.png)

- To have a more clear view of each line, the hovering was designed to bold and highlight the whole line over years, as well as show the exact number of the average feature data. For instance, Energy is becoming less important in hit songs over the year, and people have their taste change towards Acousticness.

### Dynamic Bar chart of the change of the most popular artists [(link)](https://vizhub.com/bbbbrianna/8470cfe2f0a744218cd9a447ec413f76)

- This dynamic bar chart is an interactive visualization which is able to show the popularity change of artists. The slider is designed to select which year of the data, while the data is calculated by the rule of accumulating the rank points. The final score are the sum of each song's points accroding to its rank, which shoule be less biased because this method is influenced by both rank and total songs number from the billborad. 

| Rank | 1-5 |6-10 | 11-20|21-30 | 31-40 | 41-50 | 51-60 | >60 |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| Score | 15 | 10 | 7 | 5 | 4 | 3 | 2 | 1 |

![image](https://user-images.githubusercontent.com/42927474/98187527-21e30b00-1edf-11eb-84d3-71f3d8c4c0a5.png)
![image](https://user-images.githubusercontent.com/42927474/98187923-0298ad80-1ee0-11eb-99db-07d0d72d0b90.png)
- Apprantly in 2012, Maroon5, Taylor Swift and Bruno Mars are the most popular 3 artists. However, in 2018, they were still popular but not as hot as they did before.


## Conclusions
- Although Pop and Dance pop are stil the most popular types of music in the U.S. their feature statistics are becoming more diverse.
- The length of music significantly drops in the hit songs after 2015. People prefer music with less time duration tha before.
- Although the popularity of the singers depends on the ablum they release that year, some artist like Ke$ha, The Black Eyed Peas do become more silence in these years. And some young artists like Shawn Mendes and Chainsmokers are the rising stars that are becoming the new Pop kings/queens.

## Future Works
- Most of the tasks in the proposal have been done, some improvement can be done for better deliveray of information.
1. The color range of the scatter plot can be fixed to the relevant abundance of each top genre/artist
2. It will be more straightforward if the dynamic bar chart can have some animation of fly in&out
