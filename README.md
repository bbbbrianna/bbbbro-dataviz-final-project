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
* [Yearly Top Genre and Artist Trend] (https://vizhub.com/bbbbrianna/f808d3c0f04043afb59628dfcc5dba1b?edit=files)
- In the proposal, this part was designed to be visualized by stacked bar chart or pie chart. But in the finial project, I used the scatter plot of the top 20 songs in each year to show the trend of the most popular songs with regard to the top genres and artists.

![image](https://user-images.githubusercontent.com/42927474/98183649-9e252080-1ed6-11eb-92ab-0056862b4920.png)

For expamle, in 2018, people are having a special preference to dance pop, while Popularity is positively correlating with Dancibility.

![image](https://user-images.githubusercontent.com/42927474/98184385-45568780-1ed8-11eb-8a58-aa7f2fd9c2a3.png)
In 2010, Lady Gaga was so successful that she had 3 songs in the top 20 Billboard, and Valence(how musically positive a song is) has th positive relationship with Energy(a song's intensity and activity)



## Schedule of Deliverables
### Tasks
* Yearly Genre Trend Change
  - Preprocess to reduct the data, such as calculate the percentage of the top genres (Oct 15)
  - Visualize as the bar chart by the top genre, add menu to select the year (Oct 20)
  - Tweak the attributes such as colors, size, fonts (Oct 27)
  - emphasize the most popular genre by using high-contrast color (Oct 30)

* Signature Change of the Hit Songs
  - Preprocess to select the top 10 songs and calculate the mean and standard deviation (Done)
  - Realize the sketch showing the line chart of music features change (Done)
  - Add the shade as the standard deviation to show the vairations (Oct 15)
  - Add the tooltips on each line to show which is the catagory

* Dynamic Bar chart of the change of the most popular artists
  - Proprocess to calculate the "popular score of each artist(Oct 27)
  - Select the top 15 singers each year and their score to make the dataset(Oct 29)
  - Make the barchart with menu showing the year (Nov 4)
  - Use Flourish to realize the same function and compare which one is better (Nov 6)


## Sketches
The following are my sketches of how the project will look like.
* the composition of top genres overtime
* the dynamic visualization of the most popular singers from 2010
* the line chart shows the trend of popular music features
![image](https://user-images.githubusercontent.com/42927474/94643299-7b3e9580-02b4-11eb-8f24-aa5bc775d949.png)
![image](https://user-images.githubusercontent.com/42927474/94643309-81347680-02b4-11eb-9dfb-b6748d158309.png)

## Open Questions
We can also explore the specific preference of artists that making such genres of music, or music features.
