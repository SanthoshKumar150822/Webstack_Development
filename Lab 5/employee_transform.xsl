<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Employee List</title>
      </head>
      <body>
        <h1>Employee List</h1>
        <table border="1">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          <xsl:for-each select="employees/employee">
            <tr>
              <td><xsl:value-of select="First_Name"/></td>
              <td><xsl:value-of select="Last_Name"/></td>
              <td><xsl:value-of select="Dob"/></td>
              <td><xsl:value-of select="Gender"/></td>
              <td><xsl:value-of select="Salary"/></td>
              <td><xsl:value-of select="Position"/></td>
              <td><xsl:value-of select="Email"/></td>
              <td><xsl:value-of select="Phone_number"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
