import { Blog } from './blog-type';
export const blogs: Blog[] = [
  {
    id: 1,
    image: 'assets/images/blog/101.jpg',
    heading:
      'Unit testing Asynchronous Methods With Guard Cluases',
    subHeading: '',
    blogDate: 'Mar 17, 2022',
    blogDetail:
      "Hello all. In this post, I will be demonstrating a way in which you can unit test asynchronous methods that have guard clauses in place for null arguments. The tests are written using Moq and Xunit. The example I will be working on is a simple .Net Core 6 CRUD web API project. The source code will be available for everyone. lets get straight into it.",
    blogDetail2: 'The following code snippet is part of a query service that calls a repository method for getting a stock item by its string identifier. I know a stirng would normally not be used for an identifier, but this is for demo purposes 🤫 :',
    blogDetail3: 'And to test this method, this is the unit test I have written:',
    blogDetail4: 'Using a builder pattern, a mocked version of the stock repository calls the GetStockItemById method, where an id is passed from the unit test, along with a list item of type StockItem so that the assertions can be made for each property within the list.',
    blogDetail5: 'This is all fine and well, but if there is a guard clause in place in the unit test class for testing the query service method for null arguments, then this is going to be an issue. This is what my guard clause looks like, based on this written piece on https://docs.educationsmediagroup.com/unit-testing-csharp/autofixture/idioms:',
    blogDetail6: 'Running this code now as it is will produce the following error:',
    blogDetail7: 'As discussed in the above GitHub thread, the reason this error is produced is because guard clause assertions do not detect guards on asynchronous method parameters because the exception does not throw until the returned task is waited or awaited.',
    blogDetail8: 'Additionally, this GitHub thread also demonstrates a simple workaround for this error by creating a method within the query service method of the same return type, and calling that method in the return statement of the query service method, as shown below:',
    blogDetail9: 'This workaround allows the task to be actually be returned, whereas before, the method was in a limbo state of waiting for the task to be waited or awaited.',
  },
];
