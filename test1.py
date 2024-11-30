from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Initialize the Chrome WebDriver
driver = webdriver.Chrome()

# Base URL of your application
BASE_URL = "http://<YOUR_WEB_APP_URL>"  # Replace with your app's URL

try:
    # Step 1: Navigate to the store creation page
    driver.get(f"{BASE_URL}/create-store")  # Replace with the correct route
    time.sleep(2)  # Wait for the page to load

    # Step 2: Fill in the form fields
    # Name
    name_field = driver.find_element(By.NAME, "name")  # Replace 'name' with the actual 'name' attribute of the field
    name_field.send_keys("COMSATS Store")

    # Email
    email_field = driver.find_element(By.NAME, "email")  # Replace 'name' with the actual 'name' attribute of the field
    email_field.send_keys("comsats@example.com")

    # Owner
    owner_field = driver.find_element(By.NAME, "owner")  # Replace 'name' with the actual 'name' attribute of the field
    owner_field.send_keys("COMSATS Owner")

    # Phone Number
    phone_field = driver.find_element(By.NAME, "phone")  # Replace 'name' with the actual 'name' attribute of the field
    phone_field.send_keys("1234567890")

    # Tags
    tags_field = driver.find_element(By.NAME, "tags")  # Replace 'name' with the actual 'name' attribute of the field
    tags_field.send_keys("Education, Technology")

    # Step 3: Submit the form
    submit_button = driver.find_element(By.XPATH, "//button[@type='submit']")  # Replace with the actual XPath of the submit button
    submit_button.click()

    # Step 4: Verify the store creation
    time.sleep(3)  # Wait for the server response
    success_message = driver.find_element(By.CLASS_NAME, "success-message")  # Replace 'success-message' with the actual class or ID
    assert "Store created successfully" in success_message.text
    print("Test Case Passed: Store created successfully.")

except Exception as e:
    print(f"Test Case Failed: {str(e)}")

finally:
    # Close the browser
    driver.quit()
