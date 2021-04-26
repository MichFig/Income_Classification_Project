*INCOME CLASSIFICATION PROJECT*



**Focus** <br><br>
Examination of 1994 Census Income data in an attempt to predict whether an individual's income will exceed $50,000.00 per annum based on a variety of factors such as education, age, marital status, relationship status and work classification.  

**Dataset** <br><br>
This project utilized a ![Kaggle](images/Kaggle_67.png)dataset.  <br>  

![](images/csv.raw.png)

The raw data was downloaded as a single csv.  The raw data revealed 32561 rows distributed throughout 15 columns.  Columns consisted of the following data types:  

![](images/Raw.Data_50.png)

**Cleaning and Preparing the Data** <br><br>

The data was first cleand by dropping all rows with any missing information.  ![](images/clean.png) 
Columns were then renamed.<br> ![](images/rename.png)

Finally they were grouped and exported as six (6) separate csv files. <br> ![](images/age.income.png)


**Machine Learning, Decision Trees, Linear Regression and Neural Networks** <br><br>

Libraries were imported.  
- [Scikit-Learn](https://scikit-learn.org/stable/)<br>![](images/scikitlearn_50.png)<br><br>

Data was was read in and viewed.  It was then divided into attributes and labels and the further divided in to training and test sets.    
![](modelpics/decision_tree_screenshot.png)<br>
![](modelpics/deep_model_screenshot(1).png)<br>
![](modelpics/deep_model_screenshot(2).png)<br>
![](modelpics/deep_model_screenshot(3).png)<br>

From the sklearn module we used the LinearRegression method to create a linear regression object.

![](modelpics\multiregression_screenshot(1).png)<br>

The object was then fit, trained tested and plotted. 
![](modelpics\multiregression_screenshot(2).png)<br>












- [Heroku](https://www.heroku.com/)<br>![](images/heroku_30.png)<br><br>

Project By:  
- [Connor MacKenzie](https://github.com/amerikonnor/)<br>
- [Ismahan Adan](https://github.com/)<br>
- [Michelle Fegatelli](https://github.com/MichFig/) <br>













