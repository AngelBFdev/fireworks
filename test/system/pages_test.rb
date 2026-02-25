require "application_system_test_case"

class PagesTest < ApplicationSystemTestCase
  test "clicking fireworks area does not raise JS errors" do
    errors = []
    visit root_path

    assert_selector "[data-controller='fireworks']"

    find("[data-controller='fireworks']").click
    errors = page.evaluate_script("window.__jsErrors")

    assert errors.empty?, "JS errors detected:\n#{errors.join("\n")}"
  end
end