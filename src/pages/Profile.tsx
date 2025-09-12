import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar,
  MapPin,
  GraduationCap,
  Edit,
  Save,
  X,
  FileText,
  Award,
  BookOpen
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const studentData = {
    // Personal Details
    admissionNo: "SVIT2024001",
    rollNo: "CSE001",
    name: "Arjun Reddy",
    course: "B.Tech",
    branch: "Computer Science Engineering",
    semester: "3rd Semester",
    year: "2nd Year",
    gender: "Male",
    nationality: "Indian",
    dob: "2004-03-12",
    religion: "Hindu",
    
    // Academic Details
    interMarks: "95.2%",
    tenthMarks: "96.5%",
    entranceType: "EAMCET",
    eamcetRank: "12045",
    lastStudied: "Intermediate",
    joiningDate: "2023-07-15",
    
    // Contact Details
    email: "arjun.reddy@svit.edu.in",
    phone: "9876543210",
    
    // Documents
    bankAccount: "SBI-1234567890",
    rationCard: "AP123456789",
    aadhaarCard: "1234-5678-9012",
    bloodGroup: "B+",
    
    // Parents Details
    fatherName: "Ramesh Reddy",
    motherName: "Lakshmi Reddy",
    parentContact: "9876543211",
    fatherOccupation: "Farmer",
    motherOccupation: "Homemaker",
    annualIncome: "₹5,00,000",
    
    // Address
    presentAddress: "123, Gandhi Nagar, Tirupati, AP - 517501",
    permanentAddress: "123, Gandhi Nagar, Tirupati, AP - 517501"
  };

  const academicRecord = [
    { semester: "1st", sgpa: "8.9", subjects: 6, status: "Completed" },
    { semester: "2nd", sgpa: "9.1", subjects: 6, status: "Completed" },
    { semester: "3rd", sgpa: "-", subjects: 7, status: "Current" }
  ];

  const certificates = [
    { name: "NPTEL - Data Structures", issuer: "IIT Madras", date: "2024-01-15", grade: "Elite" },
    { name: "Java Certification", issuer: "Oracle", date: "2023-12-20", grade: "Passed" },
    { name: "Web Development Bootcamp", issuer: "Coursera", date: "2023-11-10", grade: "Completed" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-8 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Student Profile</h1>
            <p className="text-muted-foreground">Manage your personal and academic information</p>
          </div>
          <Button 
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "destructive" : "outline"}
          >
            {isEditing ? (
              <>
                <X className="mr-2 h-4 w-4" />
                Cancel
              </>
            ) : (
              <>
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </>
            )}
          </Button>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Personal
            </TabsTrigger>
            <TabsTrigger value="academic" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Academic
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="certificates" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Certificates
            </TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Basic Information */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Your personal details and identification</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Admission Number</Label>
                      <Input value={studentData.admissionNo} disabled />
                    </div>
                    <div>
                      <Label>Roll Number</Label>
                      <Input value={studentData.rollNo} disabled />
                    </div>
                  </div>
                  <div>
                    <Label>Full Name</Label>
                    <Input value={studentData.name} disabled={!isEditing} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Gender</Label>
                      <Input value={studentData.gender} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label>Date of Birth</Label>
                      <Input value={studentData.dob} disabled={!isEditing} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Nationality</Label>
                      <Input value={studentData.nationality} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label>Religion</Label>
                      <Input value={studentData.religion} disabled={!isEditing} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Your contact details and address</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </Label>
                    <Input value={studentData.email} disabled={!isEditing} />
                  </div>
                  <div>
                    <Label className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </Label>
                    <Input value={studentData.phone} disabled={!isEditing} />
                  </div>
                  <div>
                    <Label className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Present Address
                    </Label>
                    <Input value={studentData.presentAddress} disabled={!isEditing} />
                  </div>
                  <div>
                    <Label>Permanent Address</Label>
                    <Input value={studentData.permanentAddress} disabled={!isEditing} />
                  </div>
                </CardContent>
              </Card>

              {/* Parents Information */}
              <Card className="card-hover lg:col-span-2">
                <CardHeader>
                  <CardTitle>Parents Information</CardTitle>
                  <CardDescription>Family details and emergency contacts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Father's Name</Label>
                      <Input value={studentData.fatherName} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label>Mother's Name</Label>
                      <Input value={studentData.motherName} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label>Contact Number</Label>
                      <Input value={studentData.parentContact} disabled={!isEditing} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Father's Occupation</Label>
                      <Input value={studentData.fatherOccupation} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label>Mother's Occupation</Label>
                      <Input value={studentData.motherOccupation} disabled={!isEditing} />
                    </div>
                    <div>
                      <Label>Annual Income</Label>
                      <Input value={studentData.annualIncome} disabled={!isEditing} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {isEditing && (
              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsEditing(false)}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Academic Information */}
          <TabsContent value="academic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                  <CardDescription>Your academic program details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Course</Label>
                      <Input value={studentData.course} disabled />
                    </div>
                    <div>
                      <Label>Branch</Label>
                      <Input value={studentData.branch} disabled />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Current Semester</Label>
                      <Input value={studentData.semester} disabled />
                    </div>
                    <div>
                      <Label>Academic Year</Label>
                      <Input value={studentData.year} disabled />
                    </div>
                  </div>
                  <div>
                    <Label>Joining Date</Label>
                    <Input value={studentData.joiningDate} disabled />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Previous Education</CardTitle>
                  <CardDescription>Your educational background</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Intermediate Marks</Label>
                      <Input value={studentData.interMarks} disabled />
                    </div>
                    <div>
                      <Label>10th Marks</Label>
                      <Input value={studentData.tenthMarks} disabled />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Entrance Type</Label>
                      <Input value={studentData.entranceType} disabled />
                    </div>
                    <div>
                      <Label>EAMCET Rank</Label>
                      <Input value={studentData.eamcetRank} disabled />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover lg:col-span-2">
                <CardHeader>
                  <CardTitle>Academic Record</CardTitle>
                  <CardDescription>Your semester-wise academic performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {academicRecord.map((record, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-4">
                          <BookOpen className="h-5 w-5 text-primary" />
                          <div>
                            <h4 className="font-medium">{record.semester} Semester</h4>
                            <p className="text-sm text-muted-foreground">{record.subjects} Subjects</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <Badge variant={record.status === 'Current' ? 'default' : 'secondary'}>
                              {record.status}
                            </Badge>
                            {record.sgpa !== '-' && (
                              <span className="text-lg font-bold text-primary">{record.sgpa}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Documents */}
          <TabsContent value="documents" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Important Documents</CardTitle>
                <CardDescription>Your official documents and identification numbers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Bank Account Number</Label>
                    <Input value={studentData.bankAccount} disabled={!isEditing} />
                  </div>
                  <div>
                    <Label>Ration Card Number</Label>
                    <Input value={studentData.rationCard} disabled={!isEditing} />
                  </div>
                  <div>
                    <Label>Aadhaar Card Number</Label>
                    <Input value={studentData.aadhaarCard} disabled={!isEditing} />
                  </div>
                  <div>
                    <Label>Blood Group</Label>
                    <Input value={studentData.bloodGroup} disabled={!isEditing} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certificates */}
          <TabsContent value="certificates" className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Certificates & Achievements</CardTitle>
                <CardDescription>Your certifications, internships, and project work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certificates.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-4">
                        <Award className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-medium">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{cert.grade}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <FileText className="mr-2 h-4 w-4" />
                  Upload New Certificate
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;